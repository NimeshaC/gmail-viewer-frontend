import { useQuery } from "@tanstack/react-query";
import { authService } from "../../../services/auth.service";
import { useEffect } from "react";
import { useAuthStore } from "../../../store/auth/auth.store";
import { useNavigate } from "react-router-dom";

export const LoginButton: React.FC = () => {
  const route = useNavigate();
  const { setToken } = useAuthStore((state) => state);

  const { data } = useQuery({
    queryKey: ["googleAuthUrl"],
    queryFn: async () => authService.getGoogleAuthUrl(),
  });

  const { data: userData, isSuccess } = useQuery({
    queryKey: ["token"],
    queryFn: async () =>
      authService.loginWithCode(
        new URLSearchParams(window.location.search).get("code")
      ),
  });

  useEffect(() => {
    if (userData && isSuccess) {
      setToken(userData?.data?.jwt);
      route("/");
    }
  }, [userData, isSuccess]);

  const handleLogin = () => {
    const url = data ? data?.data?.auth_url : "";
    window.location.href = url;
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login to Your Account
        </h2>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-3 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};
