import { LabelsProps, Variants } from 'types';

export interface ModalViewProps {
  closeModal: () => void;
}

export interface InviteCodeSetter {
  setHasInviteCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ProjectModalProps = ModalViewProps & InviteCodeSetter;
export type ConfigLabelProps = LabelsProps;

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  variants?: Variants;
}
