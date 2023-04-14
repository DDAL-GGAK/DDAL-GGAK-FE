import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { HASH_ROUTE } from 'constants/';

export function FloatNav() {
  const { hash: currHash } = useLocation();

  return (
    <Wrapper>
      {HASH_ROUTE.map((data: any) => {
        const { hash, title } = data;

        return (
          <Trigger
            key={`${hash}_${title}`}
            href={hash}
            focus={hash === currHash}
          >
            {title}
          </Trigger>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  bottom: 10%;
  margin-bottom: -60px;
  left: 5%;
  margin-left: 95px;
  font-weight: 600;
  background: ${({ theme }) => theme.transparentBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 5px;
  opacity: 0.9;
`;

const Trigger = styled.a<{ focus: boolean }>`
  color: ${(props) => (props.focus ? props.theme.background : null)};
  background: ${(props) => (props.focus ? props.theme.color : null)};
  border-radius: 4px;
  padding: 10px;
  transition: ${({ theme }) => theme.transitionOption};
`;
