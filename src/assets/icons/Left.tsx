import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { prev } from 'redux/modules/carousel';

export function Left() {
  const dispatch = useDispatch();
  const prevHandler = () => dispatch(prev());

  return (
    <Svg
      onClick={prevHandler}
      width="80"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
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
  color: white;
  opacity: 0.65;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    opacity: 1;
    color: ${({ theme }) => theme.pointColor};
  }
`;
