export interface ProjectsLink {
  id: string;
  title: string;
}

export interface Ticket {
  ticketTitle: string;
  ticketDescription: string;
  priority: number;
  difficulty: number;
  expiredAt: Date;
}

export interface Task {
  id: number;
  owner: string;
  title: string;
  description: string;
  createdAt: Date;
  expiredAt: Date;
}

export interface Label {
  name: string; // 팀 이름
  owner: string; // 팀 리더
  tickets: Ticket[];
}

/* Preview */
export interface TicketPreviewForm {
  created: number;
  fulfilled: number;
}

export interface UserPreviewForm {
  name: string;
  avatar: string; // 프로필 이미지 url
}

export interface TasksPreviewForm extends Task {
  participations: UserPreviewForm[];
  tickets: TicketPreviewForm;
}

/* Detail */
export interface TaskDetailForm extends Task {
  owner: string;
  labels: Label[];
}

export interface ProjectDataForm {
  id: number;
  owner: string;
  tasks: TasksPreviewForm[];
}

export interface ProjectsLink {
  id: string;
  title: string;
}
