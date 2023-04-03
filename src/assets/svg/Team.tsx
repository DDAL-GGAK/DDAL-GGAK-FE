import TeamSvg from 'assets/svg/Team.svg';
import { SVGProps } from 'types';
import styled from 'styled-components';

export function Team({ size }: SVGProps) {
  return <Img src={TeamSvg} alt="TeamSvg" size={size} />;
}

const Img = styled.img<SVGProps>``;
