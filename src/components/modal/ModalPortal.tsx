import { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}

export const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, el);
};
