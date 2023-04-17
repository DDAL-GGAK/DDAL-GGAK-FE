import { StarIcon } from '@heroicons/react/24/outline';
import { LabelText } from 'components/containers';
import { SVG_SIZE } from 'constants/';
import styled from 'styled-components';

interface PriorityProps {
  priority: number | string;
  size?: number;
}

export function Priority({
  priority,
  size = SVG_SIZE.TICKET_L,
}: PriorityProps) {
  const color = 'yellow';

  return (
    <Wrapper>
      <StarIcon fill={color} style={{ width: size, color }} />
      <LabelText>{priority}</LabelText>
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
  border-radius: 4px;
  gap: 5px;
`;
