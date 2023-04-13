import styled from 'styled-components';
import { SVGProps } from 'types';

export function MenuDots({ size }: SVGProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#858699"
      viewBox="0 0 16 16"
      strokeWidth={0}
      stroke="currentColor"
      className="w-6 h-6"
      width={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  :hover {
    cursor: pointer;
  }
`;

