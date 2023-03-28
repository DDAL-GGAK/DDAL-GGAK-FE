import styled from 'styled-components';
import { toggle } from 'redux/modules/themeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export function ThemeToggle() {
  const isDark = useSelector((state: RootState) => state.themeToggleSlicer);
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(toggle());

  return (
    <Wrapper onClick={onClickHandler}>
      <TogggleBtn isDark={isDark} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background: rgba(111, 111, 111, 0.5);
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
  }
`;

interface ToggleBtnProps {
  isDark: boolean;
}

const TogggleBtn = styled.div<ToggleBtnProps>`
  position: absolute;
  top: 3px;
  right: ${(props) => (props.isDark ? '3px' : '30px')};
  width: 25px;
  height: 25px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};
`;
