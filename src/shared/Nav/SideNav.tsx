import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/layout';
import { NavLink, AddProject, Config } from 'components';
import { ProjectsLink } from 'utils/types';

function SideNav() {
  const dummyLink: ProjectsLink[] = [
    { id: '1', title: 'title1' },
    { id: '2', title: 'title2' },
    { id: '3', title: 'title3' },
    { id: '4', title: 'title4' },
    { id: '5', title: 'title5' },
    { id: '6', title: 'title6' },
  ];

  return (
    <Wrapper>
      <TopWrapper>
        {dummyLink.map((v) => (
          <NavLink key={`${v.id}`} navData={v} />
        ))}
      </TopWrapper>
      <BottomWrapper>
        <AddProject />
        <Config />
      </BottomWrapper>
    </Wrapper>
  );
}

export default SideNav;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: ${TOP_NAV.HEIGHT}px;
  background: ${({ theme }) => theme.navBackground};
  box-sizing: border-box;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  width: ${SIDE_NAV.WIDTH}px;
  height: calc(100vh - ${TOP_NAV.HEIGHT}px);
  padding: ${TOP_NAV.PADDING}px 0;
  transition: ${({ theme }) => theme.transitionOption};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SIDE_NAV.GAP}px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIDE_NAV.GAP}px;
`;
