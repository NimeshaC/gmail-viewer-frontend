import api from "./api";

export const authService = {
  getGoogleAuthUrl: async () => {
    const response = await api.get("/auth/google/url");
    return response.data;
  },

  loginWithCode: async (code: any) => {
    const response = await api.post("/auth/google/callback", { code });
    return response.data;
  },
};
