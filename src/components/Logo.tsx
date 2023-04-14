import styled from 'styled-components';
import { Logo } from 'assets/icons';

export function MainLogo({ size }: { size: number }) {
  return (
    <LogoWrapper>
      <Logo size={size} />
      <LogoText>DDAL-GGAK</LogoText>
      <div />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  left: 1rem;
  top: 1rem;
  color: white;
`;

const LogoText = styled.h1`
  font-weight: 600;
  font-size: 30px;
`;
