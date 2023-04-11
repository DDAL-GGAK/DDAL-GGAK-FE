import styled from 'styled-components';

export function Hr() {
  return <Border />;
}

const Border = styled.div`
  border-top: solid 1px ${({ theme }) => theme.borderColor};
`;
