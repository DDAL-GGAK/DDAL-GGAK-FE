import styled from 'styled-components';

interface TicketProps {
  data: string;
}

export function Ticket({ data }: TicketProps) {
  return <Wrapper>{data}</Wrapper>;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.transparentBackground};
  padding: 12px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  flex-grow: 1;
  min-width: 200px;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.pointColor};
`;
