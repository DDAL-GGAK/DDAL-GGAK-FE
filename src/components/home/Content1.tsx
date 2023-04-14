import styled from 'styled-components';

export function Content1() {
  return (
    <Wrapper id="content_1">
      <div>string</div>
      <div>
        <Point>text</Point> text
      </div>
    </Wrapper>
  );
}

const Point = styled.span`
  color: ${({ theme }) => theme.pointColor};
`;
const Wrapper = styled.div`
  display: flex;
  font-size: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  gap: 30px;
  font-weight: 600;
  height: 100vh;
  background: #111;
`;
