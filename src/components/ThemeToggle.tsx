import styled from 'styled-components';
import { toggle } from 'redux/modules/themeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function ThemeToggle() {
  const isDark = useSelector((state: RootState) => state.themeToggle);
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(toggle());

  return (
    <Wrapper onClick={onClickHandler}>
      <TogggleBtn isDark={isDark} />
    </Wrapper>
  );
}

export default ThemeToggle;

const Wrapper = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background: ${({ theme }) => theme.transparentColor};
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
  }
`;

const TogggleBtn = styled.div<{ isDark: boolean }>`
  position: absolute;
  top: 3px;
  left: ${(props) => (props.isDark ? null : '3px')};
  right: ${(props) => (props.isDark ? '3px' : null)};
  width: 25px;
  height: 25px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color};
  transition: ${({ theme }) => theme.transitionOption};
`;
