import { CpuChipIcon } from '@heroicons/react/24/outline';
import { LabelText } from 'components/containers';
import { SVG_SIZE } from 'constants/';
import styled from 'styled-components';
import { getColorByLebel } from 'utils';

export function Difficulty(
  difficulty: number,
  size: number = SVG_SIZE.TICKET_L
) {
  const color = getColorByLebel(difficulty);

  return (
    <Wrapper>
      <CpuChipIcon style={{ width: size, color }} />
      <LabelText>{difficulty}</LabelText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 4px 8px;
  background: ${({ theme }) => theme.borderColor};
  color: white;
  border-radius: 4px;
  gap: 5px;
`;
