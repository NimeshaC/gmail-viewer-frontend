import { Email } from "../../../types/email";
import moment from "moment";

type EmailItemProps = {
  email: Email;
};

export const EmailItem = ({ email }: EmailItemProps) => {
  return (
    <div
      className={`p-4 border rounded-lg ${
        email.isRead ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="font-medium">{email.subject}</h3>
        <span className="text-sm text-gray-500">
          {moment(email.date).format("MMM D, YYYY")}
        </span>
      </div>
      <p className="text-sm text-gray-600">{email.from}</p>
    </div>
  );
};
