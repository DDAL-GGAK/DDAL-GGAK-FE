import { Link } from 'react-router-dom';
import { NAVLINK } from 'constants/layout';
import styled from 'styled-components';
import { ProjectsLink, Thumbnail } from 'types';
import { motion, AnimatePresence } from 'framer-motion';
import { LINK_VARIANTS } from 'constants/';
import React from 'react';

interface NavLinkProps {
  data: ProjectsLink;
  isCurrent: boolean;
}

export const NavLink = React.memo(({ data, isCurrent }: NavLinkProps) => {
  const { id, projectTitle, thumbnail } = data;

  return (
    <Link to={`/project/${id}`}>
      <AnimatePresence>
        {isCurrent ? (
          <Current
            initial="from"
            animate="to"
            exit="exit"
            variants={LINK_VARIANTS}
          />
        ) : null}
      </AnimatePresence>
      {thumbnail ? (
        <Wrapper thumbnail={thumbnail} />
      ) : (
        <Wrapper>
          <Text>{projectTitle.toUpperCase()[0]}</Text>
        </Wrapper>
      )}
    </Link>
  );
});

const Wrapper = styled.div<{ thumbnail?: Thumbnail }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${NAVLINK.WIDTH}px;
  height: ${NAVLINK.HEIGHT}px;
  border-radius: ${NAVLINK.BORDER_RADIUS}px;
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.background};
  background: ${(props) =>
    props.thumbnail
      ? `url(${props.thumbnail}) center / cover`
      : props.theme.navLinkBackground};

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.thumbnail ? 'rgba(0, 0, 0, 0)' : 'transparent'};
    border-radius: ${NAVLINK.BORDER_RADIUS}px;
    transition: ${({ theme }) => theme.transitionOption};
  }

  :hover {
    cursor: pointer;
    background: ${(props) =>
      props.thumbnail
        ? `url(${props.thumbnail}) center / cover`
        : props.theme.color};

    ::after {
      background-color: ${(props) =>
        props.thumbnail ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
    }
  }
`;

const Text = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.sideNavColor};
`;

const Current = styled(motion.div)`
  position: absolute;
  left: 0px;
  width: 5px;
  border-radius: 0 10px 10px 0;
  height: ${NAVLINK.HEIGHT}px;
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.sideNavCurrBorder};
`;
