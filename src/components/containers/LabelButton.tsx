import styled from 'styled-components';
import { Container } from 'types';

interface LabelButtonProps extends Container {
  isCurrLabel?: boolean;
}

export function LabelButton({
  children,
  isCurrLabel,
  ...props
}: LabelButtonProps) {
  return (
    <Wrapper isCurrLabel={isCurrLabel} {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isCurrLabel?: boolean }>`
  background: ${({ theme, isCurrLabel }) =>
    isCurrLabel ? theme.color : theme.background};
  color: ${({ theme, isCurrLabel }) =>
    isCurrLabel ? theme.background : theme.pointColor};
  border-right: solid 1px ${({ theme }) => theme.borderColor};
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
    color: ${({ theme }) => theme.background};
  }
`;
