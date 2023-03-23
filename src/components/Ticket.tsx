import styled from 'styled-components';

interface TicketProps {
  data: string;
}

export default function Ticket({ data }: TicketProps) {
  return <Wrapper>{data}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  color: #111;
  border-bottom: #111 solid 1px;
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 1);
  }
`;
