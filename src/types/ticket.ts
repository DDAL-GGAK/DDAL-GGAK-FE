export interface Tickets {
  TODO: [];
  IN_PROGRESS: [];
  DONE: [];
}

export interface Ticket {
  ticketTitle: string;
  ticketDescription: string;
  priority: number;
  difficulty: number;
  ticketExpiredAt: string;
}
