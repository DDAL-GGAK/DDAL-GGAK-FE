import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SIDE_NAV, TOP_NAV, REGEX, DEFAULT_VARIANTS } from 'constants/';
import { Menu } from 'assets/icons';
import { DEVICES } from 'styles';
import { ThemeToggle, LogOut } from 'components';
import { useMediaQuery } from 'hooks';
import { useLocation, Link } from 'react-router-dom';
import { MainLogo } from 'shared/MainLogo';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { ProjectsLink, UserDataForm } from 'types';
import { AnimatePresence, motion } from 'framer-motion';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Profile } from 'components/user/Profile';

interface TopNavProps {
  data: ProjectsLink[];
}

export function TopNav({ data }: TopNavProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { pathname } = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const projectId = Number(pathname.match(REGEX.PROJECT_ID)?.[1]) || null;
  const userData = useSelector(
    (state: RootState) => state.userDataSlicer
  ) as UserDataForm | null;

  const isNotSmallDevice = useMediaQuery(DEVICES.MOBILES);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && !target.closest('.dropdown')) {
        setDropdownVisible(false);
      }
    };

    if (dropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <Wrapper>
      <NavToggle>
        <Menu
          size={30}
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        />
        <AnimatePresence>
          {isDropdownVisible && (
            <DropdownWrapper
              variants={DEFAULT_VARIANTS}
              initial="from"
              animate="to"
              exit="exit"
            >
              {data.map((v) => (
                <StyledLink
                  key={v.id}
                  to={`/project/${v.id}`}
                  onClick={() => setIsDropdownVisible(false)}
                >
                  <EllipsisVerticalIcon style={{ width: 20 }} />
                  <Image src={v.thumbnail} />
                  <div>{v.projectTitle}</div>
                </StyledLink>
              ))}
            </DropdownWrapper>
          )}
        </AnimatePresence>
      </NavToggle>
      <MainNav isNotSmall={isNotSmallDevice}>
        {isNotSmallDevice ? (
          <>
            <Link to="/">
              <MainLogo />
            </Link>
            <RightWrapper className="dropdown">
              <ThemeToggle />
              <ProfileDiv onClick={toggleDropdown}>
                <Profile />
              </ProfileDiv>
              {dropdownVisible && (
                <DropdownMenu>
                  <DropdownItem onClick={() => setDropdownVisible(false)}>
                    <Link to={`/myTicket/${userData?.userId}`}>My Ticket</Link>
                  </DropdownItem>
                  <DropdownItem onClick={() => setDropdownVisible(false)}>
                    <Link to={`/project/${projectId}/settings/user`}>
                      My Page
                    </Link>
                  </DropdownItem>
                  <DropdownItem onClick={() => setDropdownVisible(false)}>
                    <LogOut />
                  </DropdownItem>
                </DropdownMenu>
              )}
            </RightWrapper>
          </>
        ) : (
          ''
        )}
      </MainNav>
    </Wrapper>
  );
}

const NavToggle = styled.div`
  width: ${SIDE_NAV.WIDTH}px;
  display: flex;
  width: 100%;
  left: 1rem;
  top: 1rem;
  position: absolute;

  @media ${DEVICES.MOBILES} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.topNavBackground};
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transitionOption};
  min-width: 400px;
`;

interface MainNavProps {
  isNotSmall: boolean;
}

const MainNav = styled.div<MainNavProps>`
  height: ${TOP_NAV.HEIGHT}px;
  box-sizing: border-box;
  display: flex;
  justify-content: ${(props) =>
    props.isNotSmall ? 'space-between' : 'flex-end'};
  align-items: center;
  padding: ${TOP_NAV.PADDING}px;
  width: calc(100% - ${SIDE_NAV.WIDTH}px);

  @media ${DEVICES.MOBILES} {
    width: 100%;
  }
`;

/* MainWrapper */
const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfileDiv = styled.div`
  cursor: pointer;
`;

const DropdownWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: 0;
  top: 44px;
  left: -16px;
  flex-direction: column;
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 20px;
  padding: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    background-color: ${({ theme }) => theme.borderColor};
  }
`;

const Image = styled.img<{ src: any }>`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: url(${({ src }) => src});
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: ${({ theme }) => theme.navBackground};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 85px;
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color};
    font-weight: bold;
  }
`;
