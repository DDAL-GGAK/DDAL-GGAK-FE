import { SVGProps } from 'types';
import styled from 'styled-components';
import { TaskWebp } from 'assets/wepb';

export function Task({ size }: SVGProps) {
  return <Img src={TaskWebp} alt="TaskSvg" size={size} />;
}

const Img = styled.img<SVGProps>`
  width: ${({ size }) => size}px;
`;
