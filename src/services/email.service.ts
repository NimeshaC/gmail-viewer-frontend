import { EmailsResponse } from "../types/email";
import api from "./api";

export const emailService = {
  getEmails: async (
    page: number = 1,
    limit: number = 20
  ): Promise<EmailsResponse> => {
    const response = await api.get("/emails", { params: { page, limit } });
    return response.data;
  },

  syncEmails: async () => {
    const response = await api.get("/emails/sync");
    return response.data;
  },
};
