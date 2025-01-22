export interface Email {
  id: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  body: string;
  isRead: boolean;
}

export interface EmailsResponse {
  emails: Email[];
  total: number;
}
