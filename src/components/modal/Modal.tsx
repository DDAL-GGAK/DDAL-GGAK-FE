import styled from 'styled-components';
import { ModalPortal } from 'components/modal';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_VARIANTS } from 'constants/';
import { ModalProps } from 'types';

export function Modal({
  children,
  isOpen,
  closeModal,
  variants = DEFAULT_VARIANTS,
  type = 'medium',
}: ModalProps) {
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
            variants={DEFAULT_VARIANTS}
            initial="from"
            animate="to"
            exit="exit"
          >
            <Wrapper
              variants={variants}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: type === 'small' ? '520px' : undefined,
                width: type === 'small' ? '100%' : undefined,
              }}
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
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color};
  border-radius: 5px;
  padding: 30px;
  position: relative;
`;
