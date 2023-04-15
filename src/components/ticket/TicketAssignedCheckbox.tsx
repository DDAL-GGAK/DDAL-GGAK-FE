import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_VARIANTS, QUERY } from 'constants/';
import { assignTicket } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useErrorHandler } from 'hooks';
import { useDispatch } from 'react-redux';
import { setTicketData } from 'redux/modules/ticketData';

interface AssignCheckBoxProps {
  ticketData: {
    assigned: string | null;
    isMyTicket: boolean;
    ticketId: string | number;
  };
}

export function AssignCheckBox({ ticketData }: AssignCheckBoxProps) {
  const { ticketId, assigned, isMyTicket } = ticketData;
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
    mutate(String(ticketId));
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
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.pointColor};
  border-radius: 4px;
  cursor: pointer;
`;

const AssignedTicket = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.transparentColor};
  border-radius: 2px;
`;

const AssignedMyTicket = styled(motion.div)`
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.subColor};
  border-radius: 2px;
`;
