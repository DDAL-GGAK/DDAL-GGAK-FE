import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { QUERY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { getUserTicketCount } from 'api';
import { getToday, getOneYearAgo, formatDate, getDateRange } from 'libs';

interface GraphDayProps {
  label?: string;
  color: string;
}

interface TicketDataForm {
  date: string;
  completedTicket: number;
}

const levels = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri'];

const calculateLevel = (completedTicket: number) => {
  if (completedTicket === 0) {
    return 0;
  }
  if (completedTicket < 3) {
    return 1;
  }
  if (completedTicket < 5) {
    return 2;
  }
  if (completedTicket < 7) {
    return 3;
  }
  return 4;
};

export function ContributionGraph({ userId }: { userId: string }) {
  const { errorHandler } = useErrorHandler();
  const { data: ticketData } = useQuery<TicketDataForm[]>(
    QUERY.KEY.USER_TICKETCOUNT,
    () => getUserTicketCount(userId),
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: errorHandler,
    }
  );

  const ticketDataForAllDates = (
    dates: string[],
    ticketDataForm: TicketDataForm[]
  ) => {
    const ticketDataMap = new Map(
      ticketDataForm.map((data) => [data.date, data.completedTicket])
    );

    return dates.map((date) => {
      const completedTicket = ticketDataMap.get(date) || 0;
      return { date, completedTicket };
    });
  };

  const today = useMemo(() => getToday(), []);
  const oneYearAgo = useMemo(() => getOneYearAgo(), []);
  const dateRange = useMemo(
    () => getDateRange(oneYearAgo, today).map(formatDate),
    [oneYearAgo, today]
  );

  const filledTicketData = useMemo(
    () => (ticketData ? ticketDataForAllDates(dateRange, ticketData) : []),
    [ticketData, dateRange]
  );

  const weeksData = useMemo(() => {
    const weeks = [];
    for (let i = 0; i < filledTicketData.length; i += 7) {
      weeks.push(filledTicketData.slice(i, i + 7));
    }
    return weeks;
  }, [filledTicketData]);

  const isMonthLabelNeeded = (
    date: Date,
    prevDate: Date | null,
    weekIndex: number
  ) => {
    return (
      !prevDate ||
      (date.getMonth() !== prevDate.getMonth() &&
        (weekIndex === 0 || date.getDate() < 8))
    );
  };

  const getDayColor = (completedTicket: number) => {
    const level = calculateLevel(completedTicket);
    return levels[level];
  };

  const isLabelDay = (dayIndex: number, weekIndex: number) => {
    return weekIndex === 0 && dayLabels[dayIndex];
  };

  const totalCompletedTickets = useMemo(
    () =>
      filledTicketData.reduce(
        (sum, dayData) => sum + dayData.completedTicket,
        0
      ),
    [filledTicketData]
  );

  return (
    <Wrapper>
      <GraphContainer>
        {weeksData.map((weekData, weekIndex) => {
          const date = new Date(weekData[0].date);
          const prevDate =
            weekIndex > 0 ? new Date(weeksData[weekIndex - 1][0].date) : null;
          const showMonthLabel = isMonthLabelNeeded(date, prevDate, weekIndex);

          return (
            <React.Fragment key={weekData[0].date}>
              <GraphWeek>
                {showMonthLabel ? (
                  <GraphLabel>
                    {date.toLocaleDateString('en-US', { month: 'short' })}
                  </GraphLabel>
                ) : (
                  <GraphLabelEmpty />
                )}
                {weekData.map((dayData, dayIndex) => {
                  const color = getDayColor(dayData.completedTicket);
                  const label = isLabelDay(dayIndex, weekIndex)
                    ? dayLabels[dayIndex]
                    : '';
                  const DayComponent = label ? GraphDayWithLabel : GraphDay;
                  return (
                    <DayComponent
                      key={dayData.date}
                      color={color}
                      label={label}
                      title={`Date: ${dayData.date}, Completed Tickets: ${dayData.completedTicket}`}
                    />
                  );
                })}
              </GraphWeek>
            </React.Fragment>
          );
        })}
      </GraphContainer>
      <SumContainer>
        Total Completed Tickets : {totalCompletedTickets}
      </SumContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;

const GraphWeek = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3px;
`;

const GraphLabel = styled.div`
  width: 14px;
  height: 14px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
`;

const GraphLabelEmpty = styled.div`
  width: 14px;
  height: 14px;
  margin-bottom: 3px;
`;

const GraphDay = styled.div<GraphDayProps>`
  width: 14px;
  height: 14px;
  margin-bottom: 3px;
  border-radius: 2px;
  background-color: ${(props) => props.color};
`;

const GraphDayWithLabel = styled(GraphDay)`
  position: relative;

  &:before {
    content: ${(props) => (props.label ? `'${props.label}'` : "''")};
    position: absolute;
    left: -20px;
    font-size: 10px;
  }
`;

const SumContainer = styled.div`
  float: left;
`;
