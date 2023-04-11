export interface Tickets {
  TODO: [];
  IN_PROGRESS: [];
  DONE: [];
}

export interface TicketCreateForm {
  ticketTitle: string;
  ticketDescription: string;
  priority: number;
  difficulty: number;
}
