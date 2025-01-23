import { useEffect, useState } from "react";
import { useEmails, syncEmails } from "../../../hooks/useEmail";
import { Loading } from "../../shared/loader";
import { EmailItem } from "../emailItem";
import { Pagination } from "../../shared/pagination";
import { useAuthStore } from "../../../store/auth/auth.store";

export const EmailList = () => {
  const [page, setPage] = useState(1);
  const { token } = useAuthStore((state) => state);
  const { data, isLoading, error } = useEmails(page);
  const { refetch } = syncEmails();

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto space-y-4 px-80">
        {data?.emails.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            No emails found
          </div>
        ) : (
          data?.emails.map((email) => (
            <EmailItem key={email.id} email={email} />
          ))
        )}
      </div>
      <div className="fixed bottom-1 left-0 right-0 bg-white shadow-top">
        <Pagination
          currentPage={page}
          totalPages={Math.ceil((data?.total || 0) / 20)}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};
