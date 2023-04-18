import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_VARIANTS, QUERY, TICKET } from 'constants/';
import { assignTicket } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { useDispatch } from 'react-redux';
import { setTicketData } from 'redux/modules/ticketData';
import { memo } from 'react';
import { sendToast } from 'libs';

interface AssignCheckBoxProps {
  ticketData: {
    assigned: string | null;
    isMyTicket: boolean;
    ticketId: string | number;
    status: string;
  };
}

export const AssignCheckBox = memo(({ ticketData }: AssignCheckBoxProps) => {
  const { ticketId, assigned, isMyTicket, status } = ticketData;
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate } = useMutation(assignTicket, {
    ...QUERY.DEFAULT_CONFIG,
    onSuccess: ({ data }) => {
      if (data) dispatch(setTicketData(data));
      queryClient.invalidateQueries(QUERY.KEY.TASK_DATA);
    },
    onError: (error: unknown) => errorHandler(error),
  });

  const toggleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (status === TICKET.STATUS.TODO) return mutate(String(ticketId));
    sendToast.error('Ticket is on Progress!');
  };

  const checkBranch = (
    assignedData: string | null,
    isMyTicketData: boolean
  ) => {
    if (!assignedData) return null;
    if (isMyTicketData)
      return (
        <AssignedMyTicket
          variants={DEFAULT_VARIANTS}
          initial="from"
          animate="to"
          exit="exit"
        />
      );
    return (
      <AssignedTicket
        variants={DEFAULT_VARIANTS}
        initial="from"
        animate="to"
        exit="exit"
      />
    );
  };

  return (
    <CheckboxWrapper onClick={toggleCheck}>
      <AnimatePresence>{checkBranch(assigned, isMyTicket)}</AnimatePresence>
    </CheckboxWrapper>
  );
});

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.pointColor};
  border-radius: 50%;
  cursor: pointer;
`;

const AssignedTicket = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.pointColor};
  border-radius: 50%;
`;

const AssignedMyTicket = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.subColor};
  border-radius: 50%;

  //border-radius: 2px;
`;
