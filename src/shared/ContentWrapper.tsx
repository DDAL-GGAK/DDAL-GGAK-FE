import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/';
import { DEVICES } from 'styles';
import useMediaQuery from 'hooks/useMediaquery';

function ContentWrapper({ children }: { children: React.ReactNode }) {
  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);

  return (
    <Wrapper isNotSmall={isNotSmallDevice}>
      <GridBox>{children}</GridBox>
    </Wrapper>
  );
}

export default ContentWrapper;

const Wrapper = styled.div<{ isNotSmall: boolean }>`
  position: fixed;
  top: ${TOP_NAV.HEIGHT}px;
  left: ${(props) => (props.isNotSmall ? `${SIDE_NAV.WIDTH}px` : '0px')};
  width: ${(props) =>
    props.isNotSmall
      ? `calc(100% - ${SIDE_NAV.WIDTH}px - ${TOP_NAV.PADDING * 2}px)`
      : `calc(100% - ${TOP_NAV.PADDING * 2}px)`};
  height: calc(100% - ${TOP_NAV.HEIGHT}px - ${TOP_NAV.PADDING * 2}px);
  background: rgba(255, 255, 255, 0.1);
  padding: ${TOP_NAV.PADDING}px;
`;

const GridBox = styled.div`
  display: grid;
  height: 100%;
  border-radius: 10px;
`;
