import styled from 'styled-components';
import { Container } from 'types';

export function LabelButton({ children, ...props }: Container) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div<{ isCurrLabel?: boolean }>`
  background: ${({ theme, isCurrLabel }) =>
    isCurrLabel ? theme.color : theme.background};
  color: ${({ theme, isCurrLabel }) =>
    isCurrLabel ? theme.background : theme.pointColor};
  border-right: solid 1px rgba(0, 0, 0, 0.15);
  font-weight: 600;
  padding: 5px 10px;
  transition: ${({ theme }) => theme.transitionOption};
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.pointColor};
  }
`;
