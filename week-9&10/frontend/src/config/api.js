const normalizedBase = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "") || "https://blog-backend-week-9-10-cp.onrender.com";

export const API_BASE = normalizedBase;
