import { Tickets } from 'types/index';

export interface TaskCreateForm {
  projectId: number;
  taskTitle: string;
  expiredAt: string;
}

export interface TaskDetailDataForm {
  createdAt: string;
  expiredAt: string;
  id: number;
  labels: LabelForm[];
  taskLeader: string;
  taskTitle: string;
  tickets: Tickets;
  totalDifficulty: number;
  totalPriority: number;
}

export interface LabelForm {
  labelId: number;
  labelTitle: string;
}
