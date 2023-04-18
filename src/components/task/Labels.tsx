import styled from 'styled-components';
import { NewLabelButton, LabelConfigButton } from 'components/project';
import { TicketState, TaskDetailDataForm, UserDataForm } from 'types';
import { useSelector, useDispatch } from 'react-redux';
import { setLabel, setTicketData } from 'redux/modules/ticketData';
import { LabelButton } from 'components/containers';
import { RootState } from 'redux/store';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { REGEX, QUERY } from 'constants/';
import { getTaskData } from 'api';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useErrorHandler } from 'hooks';
import { ReviewButton } from 'components/ticket';

export const Labels = memo(() => {
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler();
  const dispatch = useDispatch();
  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1];
  const taskId = pathname.match(REGEX.TASK_ID)?.[1];
  const taskQueryKey = useMemo(
    () => [QUERY.KEY.TASK_DATA, projectId, taskId],
    [projectId, taskId]
  );

  const fetchTaskData = useCallback(async () => {
    if (!taskId || !projectId) return;
    const data = await getTaskData({ param: taskId, query: { projectId } });

    return data;
  }, [taskId, projectId]);

  const { data: taskData } = useQuery<TaskDetailDataForm>(
    taskQueryKey,
    fetchTaskData,
    {
      ...QUERY.DEFAULT_CONFIG,
      onSuccess: (data) => {
        if (data) dispatch(setTicketData(data?.tickets));
      },
      onError: (error: unknown) => errorHandler(error),
    }
  );

  console.log(taskData);

  useEffect(() => {
    dispatch(setLabel('All'));
  }, []);

  const LabelClickHandler = useCallback((labelTitle: string) => {
    dispatch(setLabel(labelTitle));
  }, []);

  const { label } = useSelector(
    (state: RootState) => state.ticketDataSlicer as TicketState
  );

  const userData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  return (
    <TopWrapper>
      <Wrapper>
        <LabelWrapper>
          {[
            {
              labelId: 0,
              labelTitle: 'All',
            },
            ...(taskData?.labels || []),
          ]?.map((team) => {
            const { labelTitle } = team;

            return (
              <LabelButton
                key={labelTitle}
                isCurrLabel={label === labelTitle}
                onClick={() => {
                  LabelClickHandler(labelTitle);
                }}
              >
                {labelTitle}
              </LabelButton>
            );
          })}
        </LabelWrapper>
        <ConfigWrapper>
          <NewLabelButton />
          <LabelConfigButton labels={taskData?.labels || []} />
        </ConfigWrapper>
      </Wrapper>

      <RightWrapper>
        {/* labelLeader로 교체 */}
        {taskData?.taskLeader === userData?.email && <ReviewButton />}
      </RightWrapper>
    </TopWrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
`;

const LabelWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  overflow-x: auto;
`;

const ConfigWrapper = styled.div`
  display: flex;
`;

const RightWrapper = styled.div``;
