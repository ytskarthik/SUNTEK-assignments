import { create } from "zustand";
import axios from "axios";
import { API_BASE } from "../config/api";

const storedToken = localStorage.getItem("token");
if (storedToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
}

const normalizeUser = (user) => {
  if (!user) return null;
  return {
    ...user,
    _id: user._id || user.userId,
  };
};

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async (userCredWithRole) => {
    const { role, ...userCredObj } = userCredWithRole;
    try {
      //set loading true
      set({ loading: true, error: null });
      //make api call
      let res = await axios.post(`${API_BASE}/common-api/login`, userCredObj, { withCredentials: true });
      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
      // console.log("res is ", res);
      //update state
      set({
        loading: false,
        isAuthenticated: true,
        currentUser: normalizeUser(res.data.payload), //{message:"",payload:}
      });
    } catch (err) {
      console.log("err is ", err?.response?.data || err);
      const serverErr = err.response?.data;
      const msg = serverErr?.message || serverErr?.description || serverErr?.error || "Login failed";
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: msg,
      });
    }
  },
  logout: async () => {
    try {
      //set loading state
      set({ loading: true, error: null });
      //make logout api req
      await axios.get(`${API_BASE}/common-api/logout`, { withCredentials: true });
      localStorage.removeItem("token");
      delete axios.defaults.headers.common.Authorization;
      //update state
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      });
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.error || "Logout failed",
      });
    }
  },
  // restore login
  checkAuth: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(`${API_BASE}/common-api/check-auth`, { withCredentials: true });

      set({
        currentUser: normalizeUser(res.data.payload),
        isAuthenticated: true,
        loading: false,
      });
    } catch (err) {
      // If user is not logged in → do nothing
      if (err.response?.status === 401) {
        set({
          currentUser: null,
          isAuthenticated: false,
          loading: false,
        });
        return;
      }

      // other errors
      console.error("Auth check failed:", err);
      set({ loading: false });
    }
  },
}));
