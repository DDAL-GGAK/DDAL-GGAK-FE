import styled from 'styled-components';

interface ButtonProps {
  buttonType?:
    | 'point'
    | 'dark'
    | 'default'
    | 'dangerous_big'
    | 'point_big'
    | 'small'
    | 'border';
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
      case 'dangerous_big':
        return <Dangerous {...props}>{children}</Dangerous>;
      case 'point_big':
        return <PointBig {...props}>{children}</PointBig>;
      case 'small':
        return <Small {...props}>{children}</Small>;
      case 'border':
        return <BorderButton {...props}>{children}</BorderButton>;
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
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: ${({ theme }) => theme.pointColor};
    cursor: pointer;
  }
`;

const Dangerous = styled.button`
  background: ${({ theme }) => theme.newTaskBackground};
  color: ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  width: 100%;

  :hover {
    background: ${({ theme }) => theme.accentColor};
    cursor: pointer;
  }
`;

const PointBig = styled.button`
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.pointColor};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const Small = styled.button`
  display: block;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitionOption};
  width: 150px;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.pointColorLight};
  }
`;

const BorderButton = styled.button`
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: ${({ theme }) => theme.borderColor} 1px solid;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.transparentColor};
  height: 40px;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.borderColor};
  }
`;
