import styled from 'styled-components';
import { toggle } from 'redux/modules/themeToggle';
import { useDispatch } from 'react-redux';

function ThemeToggle() {
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(toggle());

  return <Wrapper onClick={onClickHandler} />;
}

export default ThemeToggle;

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;
