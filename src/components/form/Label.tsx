import styled from 'styled-components';
import { LabelProps } from 'types';

export default function Label({ value, errorMessage }: LabelProps) {
  return (
    <Wrapper>
      <Title>{value}</Title>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px 5px 0px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.errorColor};
  font-weight: 600;
  font-size: 0.9rem;
`;
