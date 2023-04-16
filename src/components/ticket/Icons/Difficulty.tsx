import { LabelText } from 'components/containers';
import styled from 'styled-components';
import { DIFFICULTY } from 'constants/';

interface DifficultyProps {
  difficulty: number;
}

export function Difficulty({ difficulty }: DifficultyProps) {
  const src = DIFFICULTY[difficulty];

  return (
    <Wrapper>
      <Image src={src} alt="level" />
      <LabelText>{difficulty}</LabelText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  font-size: 14px;
  padding: 4px 8px;
  color: white;
  border-radius: 4px;
  gap: 5px;
`;

const Image = styled.img`
  width: 20px;
`;
