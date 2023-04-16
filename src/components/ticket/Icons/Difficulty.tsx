import { LabelText } from 'components/containers';
import styled from 'styled-components';
import l1 from 'assets/img/l1.png';
import l2 from 'assets/img/l2.png';
import l3 from 'assets/img/l3.png';
import l4 from 'assets/img/l4.png';
import l5 from 'assets/img/l5.png';

interface DifficultyProps {
  difficulty: number;
}

export function Difficulty({ difficulty }: DifficultyProps) {
  const levelMap = [0, l1, l2, l3, l4, l5];

  const src = levelMap[difficulty];
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
  background: ${({ theme }) => theme.borderColor};
  color: white;
  border-radius: 4px;
  gap: 5px;
`;

const Image = styled.img<{ src: string }>`
  width: 20px;
`;
