import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { EmailList } from "./components/emails/emailList";
import { LoginButton } from "./components/auth/loginButton";
import { useAuthStore } from "./store/auth/auth.store";

function App() {
  const queryClient = new QueryClient();
  const { token } = useAuthStore((state) => state);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold text-gray-900">Gmail Viewer</h1>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 py-6">
            {!token ? (
              <div className="flex justify-center items-center h-64">
                <LoginButton />
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<EmailList />} />
              </Routes>
            )}
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
