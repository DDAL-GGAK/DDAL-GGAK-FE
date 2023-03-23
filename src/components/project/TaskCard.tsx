import styled from 'styled-components';

interface TaskCardProps {
  children: React.ReactNode;
}

export default function TaskCard({ children }: TaskCardProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.transparentColor};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 5px;
  height: 400px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    cursor: pointer;
  }
`;
