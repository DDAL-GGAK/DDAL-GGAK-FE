const DEFAULT_CONFIG = Object.freeze({
  retry: false,
});

const KEY = Object.freeze({
  USER_DATA: 'userData',
  USER_PROJECTS: 'userProjects',
  USER_PROFILE: 'userProfile',
  USER_NICKNAME: 'userNickname',
  USER_TICKETCOUNT: 'userTicketCount',
  USER_TOTALTICKET: 'usetTotalTicket',
  PROJECT_THUMBNAIL: 'projectThumbnail',
  PROJECT_TITLE: 'projectTitle',
  PROJECT_DATA: 'projectData',
  PROJECT_PARTICIPANTS: 'projectParticipants',
  TASK_DATA: 'taskData',
  LABEL_DATA: 'labelData',
  TICKET_DATA: 'ticketData',
  TICKET_DETAIL: 'ticketDetail',
  PROJECT_INVITE_CODE: 'projectIviteCode',
});

export const QUERY = Object.freeze({
  DEFAULT_CONFIG,
  KEY,
});
