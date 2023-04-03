import { Participants } from 'types';

export type Thumbnail = string | null | undefined;

export interface ProjectsLink {
  id: number;
  thumbnail: Thumbnail;
  projectTitle: string;
}

export interface ProjectDataForm {
  projectLeader: string;
  projectTitle: string;
  tasks: TaskDataForm[];
  thumbnail: Thumbnail;
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
