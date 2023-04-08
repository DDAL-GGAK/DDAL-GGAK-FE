import { SVGProps } from 'types';
import styled from 'styled-components';
import { TeamWebp } from 'assets/wepb';

export function Team({ size }: SVGProps) {
  return <Img src={TeamWebp} alt="TeamSvg" size={size} />;
}

const Img = styled.img<SVGProps>`
  width: ${({ size }) => size}px;
`;
