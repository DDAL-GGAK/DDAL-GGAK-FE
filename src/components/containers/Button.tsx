import styled from 'styled-components';

interface ButtonProps {
  buttonType?: 'point' | 'dark' | 'default';
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
      case 'dark':
        return <Dark {...props}>{children}</Dark>;
      default:
        return <Default {...props}>{children}</Default>;
    }

  return <Default {...props}>{children}</Default>;
}

const Default = styled.button`
  background: ${({ theme }) => theme.background};
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.pointColor};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;

const Point = styled.button`
  background: ${({ theme }) => theme.pointColor};
  transition: ${({ theme }) => theme.transitionOption};
  color: whitesmoke;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const Dark = styled.button`
  background: #454545;
  color: whitesmoke;
  transition: ${({ theme }) => theme.transitionOption};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${({ theme }) => theme.pointColor};
    cursor: pointer;
  }
`;
