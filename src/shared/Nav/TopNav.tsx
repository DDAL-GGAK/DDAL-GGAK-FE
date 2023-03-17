import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV } from 'constants/';
import { Search } from 'assets/icons';

function TopNav() {
  return (
    <Wrapper>
      <MainNav>
        <LeftWrapper>
          <ProjectTitle>Project name</ProjectTitle>
        </LeftWrapper>
        <RightWrapper>
          <InputWrapper>
            <SearchInput />
            <Search />
          </InputWrapper>
          <ProfileImage />
        </RightWrapper>
      </MainNav>
      <SubNav />
    </Wrapper>
  );
}

export default TopNav;

const Wrapper = styled.div`
  position: fixed;
  left: ${SIDE_NAV.WIDTH}px;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.navBackground};
  width: calc(100% - ${SIDE_NAV.WIDTH}px);
`;

const MainNav = styled.div`
  height: ${TOP_NAV.HEIGHT}px;
  box-sizing: border-box;
  border-bottom: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

/* MainWrapper */
const LeftWrapper = styled.div`
  background: tomato;
  display: flex;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const SearchInput = styled.input.attrs({ type: 'text' })`
  box-sizing: border-box;
  width: 293.5px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 8px;
`;

const ProfileImage = styled.div`
  box-sizing: border-box;

  width: 50px;
  height: 50px;

  background: url(.jpg);
  border: 1px solid #000000;
  border-radius: 10px;
  background: ${({ theme }) => theme.navLinkBackground};
`;

/* subNav */

const SubNav = styled.div`
  height: 80px;
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;

  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 8px;

  /* text */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;
