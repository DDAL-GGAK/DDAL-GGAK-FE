type TicketState = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface TicketDataForm {
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

export interface SendTicketReviewForm {
  ticketId: string;
  reviewTitle: string;
  reviewDescription: string;
}
