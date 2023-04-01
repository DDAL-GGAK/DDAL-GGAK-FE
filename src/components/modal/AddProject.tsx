import { useState } from 'react';
import styled from 'styled-components';
import { CreateProject, JoinProject } from 'components/modal';

export function AddProject() {
  const [page, setPage] = useState(1);
  const handlePrevClick = () => {
    setPage(page - 1); // 이전 버튼을 클릭하면 페이지를 1 감소시킵니다.
  };
  const handleNextClick = () => {
    setPage(page + 1); // 다음 버튼을 클릭하면 페이지를 1 증가시킵니다.
  };
  let content;
  if (page === 1) {
    content = <CreateProject />;
  } else if (page === 2) {
    content = <JoinProject />;
  }

  return (
    <div>
      {content}
      {page !== 1 && <Button onClick={handlePrevClick}>이전</Button>}
      {page !== 2 && (
        <div>
          if you have invite code, please enter invitation code.
          <br />
          <Button onClick={handleNextClick}>Join Project</Button>
        </div>
      )}
    </div>
  );
}

const Button = styled.button``;
