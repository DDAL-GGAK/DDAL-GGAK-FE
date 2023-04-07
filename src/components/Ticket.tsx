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
  box-shadow: 0 2px 4px
    rgba(
      0,
      0,
      0,
      ${({ theme }) => (theme.background === '#F2F2F2' ? '0.1' : '0.3')}
    );
  flex-grow: 1;
  min-width: 200px;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.pointColor};
`;
