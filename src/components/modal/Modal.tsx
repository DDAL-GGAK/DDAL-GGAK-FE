import styled from 'styled-components';
import { ModalPortal } from 'components/modal';
import { AnimatePresence, motion } from 'framer-motion';
import { mountVariants, modalCardVariants } from 'libs';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({ children, isOpen, closeModal }: ModalProps) {
  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <ModalPortal>
      <AnimatePresence>
        {isOpen ? (
          <Overlay
            onClick={closeHandler}
            variants={mountVariants}
            initial="from"
            animate="to"
            exit="exit"
          >
            <Wrapper
              variants={modalCardVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </Wrapper>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </ModalPortal>
  );
}

const Overlay = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border-radius: 5px;
  padding: 20px;
  position: relative;
`;
