import { ProjectsLink } from 'types';

export type Profile = string | null | undefined;

export interface Participant {
  id: number;
  email: string;
  nickname: string;
  thumbnail: string;
  role: string;
}

export interface UserDataForm {
  userId: number;
  email: string;
  nickname: string;
  profile: Profile;
  projects: ProjectsLink[];
}

/* myTicket */
export interface TicketData {
  date: string;
  completedTicket: number;
}

export interface TicketStatsData {
  id: number,
  email: string,
  nickname: string,
  thumbnail: string,
  totalDifficulty: number,
  totalPriority: number,
  totalTicketCount: number,
  completedTicketCount: number,
  averageDifficulty: number,
  averagePriority: number,
  totalScore: number,
}