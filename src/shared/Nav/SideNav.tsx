import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/layout';
import NavLink from 'components/NavLink';
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
      {dummyLink.map((v) => (
        <NavLink navData={v} />
      ))}
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
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SIDE_NAV.GAP}px;
  transition: ${({ theme }) => theme.transitionOption};
`;
