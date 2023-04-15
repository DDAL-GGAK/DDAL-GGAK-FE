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
