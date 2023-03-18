import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV, CONTENT_WRAPPER } from 'constants/';

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <GridBox>{children}</GridBox>
    </Wrapper>
  );
}

export default ContentWrapper;

const Wrapper = styled.div`
  position: fixed;
  top: ${TOP_NAV.HEIGHT}px;
  left: ${SIDE_NAV.WIDTH}px;
  width: calc(100% - ${SIDE_NAV.WIDTH}px - ${CONTENT_WRAPPER.PADDING * 2}px);
  height: calc(100% - ${TOP_NAV.HEIGHT}px - ${CONTENT_WRAPPER.PADDING * 2}px);
  background: rgba(255, 255, 255, 0.1);
  padding: ${CONTENT_WRAPPER.PADDING}px;
`;

const GridBox = styled.div`
  display: grid;
  height: 100%;
  border-radius: 10px;
`;
