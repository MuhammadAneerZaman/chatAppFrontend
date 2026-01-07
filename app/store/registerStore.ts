import { create } from "zustand";

interface RegisterState {
  formData: {
    fullName: string;
    email: string;
    password: string;
  };
  success: string;
  error: string;

  setFormData: (key: keyof RegisterState["formData"], value: string) => void;
  setSuccess: (msg: string) => void;
  setError: (msg: string) => void;
}


export const useRegisterStore = create<RegisterState>((set) => ({
  formData: {
    fullName: "",
    email: "",
    password: "",
  },
  success: "",
  error: "",

  setFormData: (key, value) =>
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    })),

  setSuccess: (msg) => set({ success: msg }),
  setError: (msg) => set({ error: msg }),
}));
