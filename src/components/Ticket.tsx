import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface TicketProps {
  data: string;
}

export default function Ticket({ data }: TicketProps) {
  return (
    <Wrapper>
      <Link to="/1">{data}</Link>
    </Wrapper>
  );
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
