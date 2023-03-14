import styled from 'styled-components';
import { NAV } from 'constants/layout';
import NavLink from 'components/NavLink';
import { ProjectsLink } from 'utils/types';

function Nav() {
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

export default Nav;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.navBackground};
  box-sizing: border-box;
  border-right: black ${NAV.BORDER_WIDTH}px solid;
  width: ${NAV.WIDTH}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23.5px;
  gap: ${NAV.GAP}px;
`;
