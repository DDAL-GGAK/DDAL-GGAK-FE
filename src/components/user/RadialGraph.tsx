import React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
// import { useQuery } from 'react-query';
// import { QUERY } from 'constants/';
// import { useErrorHandler } from 'hooks';
// import { getUserTicketStats } from 'api';
// import { TicketStatsData } from 'types';

export function RadialGraph({ userId }: { userId: string }) {
    // const { errorHandler } = useErrorHandler();
    // const { data: ticketStats } = useQuery<TicketStatsData>(
    //   QUERY.KEY.USER_TICKETSTATS,
    //   () => getUserTicketStats(userId),
    //   {
    //     ...QUERY.DEFAULT_CONFIG,
    //     onError: errorHandler,
    //   }
    // );

    console.log(userId);

  const data = [
    {
      id: 'totalTicketCount',
      data: [
        {
          x: 'totalTicketCount',
          y: 100,
        },
      ],
    },
    {
      id: 'totalDifficulty',
      data: [
        {
          x: 'totalDifficulty',
          y: 115,
        },
      ],
    },
    {
      id: 'totalPriority',
      data: [
        {
          x: 'totalPriority',
          y: 60,
        },
      ],
    },
    {
      id: 'averageDifficulty',
      data: [
        {
          x: 'averageDifficulty',
          y: 50,
        },
      ],
    },
    {
      id: 'averagePriority',
      data: [
        {
          x: 'averagePriority',
          y: 30,
        },
      ],
    },
    {
      id: 'completedTicketCount',
      data: [
        {
          x: 'completedTicketCount',
          y: 25,
        },
      ],
    },
  ];

  return (
    <ResponsiveRadialBar
      data={data}
      valueFormat=">-.2f"
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      labelsTextColor={{ theme: 'labels.text.fill' }}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 80,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: 'left-to-right',
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          symbolSize: 18,
          symbolShape: 'square',
        },
      ]}
    />
  );
}
