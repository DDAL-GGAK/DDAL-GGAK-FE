import { TICKET } from 'constants/';

type TicketStatus = keyof typeof TICKET.STATUS;

export interface Comment {
  commentId: string;
  comment: string;
  email: string;
}

export interface TicketDataForm {
  assigned: string | null;
  completedAt: string | null;
  description: string;
  difficulty: number | string;
  expiredAt: string | null;
  label: null | string;
  priority: number | string;
  status: TicketStatus;
  ticketId: number | string;
  title: string;
  commentlist: Comment[];
  isMyTicket: boolean;
}

export interface Tickets {
  TODO: TicketDataForm[];
  IN_PROGRESS: TicketDataForm[];
  DONE: TicketDataForm[];
}

export interface TicketCreateForm {
  ticketTitle: string;
  ticketDescription: string;
  priority: number;
  difficulty: number;
}
