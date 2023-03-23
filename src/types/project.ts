import { Participants } from 'types';

export interface ProjectsLink {
  id: string;
  title: string;
}

export interface ProjectDataForm {
  completedTickets: number;
  projectLeader: string;
  projectTitle: string;
  tasks: TaskDataForm[];
  thumbnail: string | null;
}

export interface TaskDataForm {
  expiredAt: string;
  id: number;
  participants: Participants[];
  participantsCount: number;
  taskTitle: string;
  totalTickets: number;
}
