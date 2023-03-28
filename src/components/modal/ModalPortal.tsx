import { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

export const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, el);
};
