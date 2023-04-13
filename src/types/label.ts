import { UseFormRegister } from 'react-hook-form';

export interface LabelCreateForm {
  taskId: number;
  labelTitle: string;
}

export interface LabelInputForm {
  labelTitle: string;
}

export interface LabelDataForm {
  labelId: number;
  labelTitle: string;
}

export interface LabelsProps {
  labels: LabelDataForm[];
}

export interface LabelTitleInputProps {
  register: UseFormRegister<LabelInputForm>;
}

export interface SetLabelForm {
  ticketId: string;
  labelId: string;
}
