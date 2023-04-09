import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.pointColor};
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;
