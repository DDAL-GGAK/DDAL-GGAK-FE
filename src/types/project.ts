import { Participants } from 'types';

export interface ProjectsLink {
  id: string;
  thumbnail: string;
  projectTitle: string;
}

export interface ProjectDataForm {
  projectLeader: string;
  projectTitle: string;
  tasks: TaskDataForm[];
  thumbnail: string | null;
}

export interface TaskDataForm {
  id: number;
  participants: Participants[];
  participantsCount: number;
  taskTitle: string;
  totalTickets: number;
  completedTickets: string;
  expiredAt: string;
}
