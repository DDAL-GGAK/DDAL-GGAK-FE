import { UserIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';
import { SVGProps } from 'types';
import { Add } from './Add';

export function AddUser({ size }: SVGProps) {
  return (
    <Wrapper>
      <UserIcon width={size} />
      <Add size={12} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }

  svg:last-child {
    position: absolute;
    right: -5px;
    top: -5px;
  }
`;
