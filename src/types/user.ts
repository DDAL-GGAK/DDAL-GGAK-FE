import { ProjectsLink } from 'types';

export interface Participants {
  id: number;
  email: string;
  nickname: string;
  thumbnail: string;
}

export interface UserDataForm {
  userId: number;
  email: string;
  nickname: string;
  profile: string;
  projects: ProjectsLink[];
}
