import styled from 'styled-components';

interface BackProps {
  size: number;
  onClick?: () => void;
}

export function Back({ size, onClick }: BackProps) {
  const defaultCallback = () => {};
  const onClickHandler = onClick || defaultCallback;

  return (
    <Svg
      onClick={onClickHandler}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      width={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  :hover {
    cursor: pointer;
  }
`;
