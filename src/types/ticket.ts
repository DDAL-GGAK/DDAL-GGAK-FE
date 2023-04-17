import { TICKET } from 'constants/';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

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
}

export interface Tickets {
  TODO: TicketDataForm[];
  IN_PROGRESS: TicketDataForm[];
  REVIEW: TicketDataForm[];
  DONE: TicketDataForm[];
  [key: string]: TicketDataForm[];
}

export interface TicketCreateForm {
  ticketTitle: string;
  ticketDescription: string;
  priority: number;
  difficulty: number;
}

export interface TicketCreateRegister {
  register: UseFormRegister<TicketCreateForm>;
  errors: FieldErrors<TicketCreateForm>;
}

export interface TicketState {
  ticket: Tickets;
  label: string;
}
