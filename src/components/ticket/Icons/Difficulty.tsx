import { CpuChipIcon } from '@heroicons/react/24/outline';
import { LabelText } from 'components/containers';
import { SVG_SIZE } from 'constants/';
import styled from 'styled-components';
import { getColorByLebel } from 'utils';

interface DifficultyProps {
  difficulty: number | string;
  size?: number;
}

export function Difficulty({
  difficulty,
  size = SVG_SIZE.TICKET_L,
}: DifficultyProps) {
  const color = getColorByLebel(Number(difficulty));

  return (
    <Wrapper>
      <CpuChipIcon style={{ width: size, color }} />
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
