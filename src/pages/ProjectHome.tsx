import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import { MODAL_CARD_VARIANTS, QUERY } from 'constants/';
import { useErrorHandler, useModal } from 'hooks';
import { getUserProjects } from 'api';
import { CreateProject, JoinProject, Loading } from 'components';
import { teamWork } from 'assets/svg';

export function ProejectHome() {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  const [hasInviteCode, setHasInviteCode] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { errorHandler } = useErrorHandler({ route: pathname });
  const navigate = useNavigate();
  const { data: fetchData, isLoading } = useQuery(
    QUERY.KEY.USER_PROJECTS,
    getUserProjects,
    {
      ...QUERY.DEFAULT_CONFIG,
      onError: (error: unknown) => errorHandler(error),
    }
  );

  const project = fetchData?.data?.[0];
  useEffect(() => {
    if (project) {
      const projectId = project.id;
      navigate(`/project/${projectId}`);
    }
    if (!isOpen) setHasInviteCode(false);
  }, [project, navigate]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variants={MODAL_CARD_VARIANTS}
      >
        {hasInviteCode ? (
          <JoinProject
            closeModal={closeModal}
            setHasInviteCode={setHasInviteCode}
          />
        ) : (
          <CreateProject
            closeModal={closeModal}
            setHasInviteCode={setHasInviteCode}
          />
        )}
      </Modal>
      <Wrapper>
        <Image src={teamWork} onClick={openModal} />
        <div>Create your own Project!</div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: 600;
  gap: 2.5rem;
  color: ${({ theme }) => theme.transparentColor};
`;

const Image = styled.img`
  width: 30vw;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    filter: drop-shadow(0 0 15px rgba(179, 178, 245, 0.85));
  }
`;
