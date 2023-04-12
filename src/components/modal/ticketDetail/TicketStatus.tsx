import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { changeTicketStatus } from 'api';
import { QUERY, TOASTIFY } from 'constants/';
import { sendToast } from 'libs';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';

export function TicketStatus({ status }: { status: string }) {
  const [availableStatuses, setAvailableStatuses] = useState<string[]>([]);
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();

  useEffect(() => {
    const statuses = ['ToDo', 'In_Progress', 'Done'].filter(
      (s) => s !== status
    );
    setAvailableStatuses(statuses);
  }, [status]);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    mutate(event.target.value);
  };

  const { mutate } = useMutation(changeTicketStatus, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
      sendToast.success(TOASTIFY.SUCCESS.CREATE_LABEL);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  return (
    <>
      <Text>status : {status}</Text>
      <select onChange={handleStatusChange}>
        {availableStatuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </>
  );
}

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;
