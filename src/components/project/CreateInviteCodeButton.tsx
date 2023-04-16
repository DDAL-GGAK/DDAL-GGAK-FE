import { createProjectInviteCode } from 'api';
import { useQuery } from 'react-query';
import { QUERY, REGEX, TOASTIFY } from 'constants/';
import { useErrorHandler } from 'hooks';
import { useLocation } from 'react-router-dom';
import { sendToast } from 'libs';
import styled from 'styled-components';

export function CreateInviteCodeButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  const projectId = pathname.match(REGEX.PROJECT_ID)?.[1] || '';
  const { errorHandler } = useErrorHandler({ route: pathname });
  const { refetch } = useQuery(
    [QUERY.KEY.PROJECT_INVITE_CODE, projectId],
    () => createProjectInviteCode(projectId),
    {
      ...QUERY.DEFAULT_CONFIG,
      enabled: false,
      onSuccess: () => sendToast.success(TOASTIFY.SUCCESS.CREATE_INVITE_CODE),
      onError: errorHandler,
    }
  );

  const createInviteCodeHandler = async () => {
    const { data: newInviteCode } = await refetch();
    if (typeof newInviteCode === 'string')
      await navigator.clipboard.writeText(newInviteCode);
  };

  return <Wrapper onClick={createInviteCodeHandler}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
