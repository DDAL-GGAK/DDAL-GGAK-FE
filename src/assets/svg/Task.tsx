import TaskSvg from 'assets/svg/Task.svg';
import { SVGProps } from 'types';
import styled from 'styled-components';

export function Task({ size }: SVGProps) {
  return <Img src={TaskSvg} alt="TaskSvg" size={size} />;
}

const Img = styled.img<SVGProps>`
  width: ${({ size }) => size}px;
`;
