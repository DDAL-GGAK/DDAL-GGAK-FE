import styled from 'styled-components';
import { NoSymbolIcon } from '@heroicons/react/24/outline';

export function NotFound() {
  return (
    <Wrapper>
      <NoSymbolIcon width={100} />
      <Title>404 Not Found</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  color: ${({ theme }) => theme.transparentColor};
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.transparentColor};
`;
