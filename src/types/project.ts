import { Participant } from 'types';

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
  participants: Participant[];
}

export interface TaskDataForm {
  id: number;
  dueDate: number;
  participants: Participant[];
  participantsCount: number;
  taskTitle: string;
  totalTickets: number;
  completedTickets: number;
  expiredAt: string;
  createdAt: string;
}

export interface ProjectInfoProps {
  projectData: ProjectDataForm;
}
