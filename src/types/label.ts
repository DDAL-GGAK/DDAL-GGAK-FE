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
