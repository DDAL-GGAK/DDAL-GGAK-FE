import { Tickets, LabelDataForm } from 'types';

export interface TaskCreateForm {
  projectId: number;
  taskTitle: string;
  expiredAt: string;
}

export interface TaskDetailDataForm {
  createdAt: string;
  expiredAt: string;
  id: number;
  labels: LabelDataForm[];
  taskLeader: string;
  taskTitle: string;
  tickets: Tickets;
  totalDifficulty: number;
  totalPriority: number;
}
