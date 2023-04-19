import { Tickets, LabelDataForm } from 'types';
import { UseFormRegister } from 'react-hook-form';

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

export interface TaskTitleInputProps {
  register: UseFormRegister<TaskCreateForm>;
}

export interface AddUserProps {
  taskId: string;
  projectId: string;
  email: string;
}

export interface GetProjectUsersProps {
  projectId: string;
  taskId: string;
}
