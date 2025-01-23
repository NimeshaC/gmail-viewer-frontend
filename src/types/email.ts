export type Email = {
  id: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  body: string;
  isRead: boolean;
};

export type EmailsResponse = {
  emails: Email[];
  total: number;
};
