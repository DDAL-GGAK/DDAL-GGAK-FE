export interface Tickets {
  TODO: [];
  IN_PROGRESS: [];
  DONE: [];
}

type TicketState = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface TicketDetailForm {
  assigned: string | null;
  completedAt: string | null;
  description: string;
  difficulty: number | string;
  expiredAt: string | null;
  label: null | string;
  priority: number | string;
  status: TicketState;
  ticketId: number | string;
  title: string;
}

export interface TicketCreateForm {
  ticketTitle: string;
  ticketDescription: string;
  priority: number;
  difficulty: number;
}
