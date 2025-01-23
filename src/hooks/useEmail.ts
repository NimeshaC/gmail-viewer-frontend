import { useQuery } from "@tanstack/react-query";
import { emailService } from "../services/email.service";

export const useEmails = (page: number = 1) => {
  return useQuery({
    queryKey: ["emails", page],
    queryFn: () => emailService.getEmails(page),
  });
};

export const syncEmails = () => {
  return useQuery({
    queryKey: ["syncEmails"],
    queryFn: () => emailService.syncEmails(),
  });
};
