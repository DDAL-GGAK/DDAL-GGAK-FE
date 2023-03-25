import React, { useCallback, useState } from 'react';
import Modal from '../components/Modal/Modal';

// `useBlur` props로 모달 외부를 클릭하면 모달을 닫을지 선택하도록 했다.
const useModal = ({ useBlur = true } = {}) => {
  // 모달의 렌더링 여부를 설정할 상태 값
  const [isOpen, setIsOpen] = useState(false);

  // 모달 열기
  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  // 모달 닫기
  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  // isOpen이 true라면 Modal 컴포넌트를 반환, false라면 null을 반환
  return {
    Modal: isOpen
      ? ({ children }: any) => (
          <Modal onClose={useBlur ? close : null}>{children}</Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;