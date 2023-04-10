import styled from 'styled-components';

interface ButtonProps {
  buttonType?: 'point' | 'default';
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  buttonType = 'default',
  children,
  ...props
}: ButtonProps) {
  if (buttonType)
    switch (buttonType) {
      case 'point':
        return <Point {...props}>{children}</Point>;
      case 'default':
        return <Default {...props}>{children}</Default>;
      default:
        return <Default {...props}>{children}</Default>;
    }

  return <Default {...props}>{children}</Default>;
}

const Default = styled.button`
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

const Point = styled.button`
  padding: 0.5rem 16px;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme }) => theme.pointColor};
  border: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitionOption};
  color: whitesmoke;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;
