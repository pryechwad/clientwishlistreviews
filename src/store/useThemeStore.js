import { create } from "zustand";

const useThemeStore = create((set) => ({
  darkMode: false,
  toggleTheme: () => set((state) => {
    const newTheme = !state.darkMode;
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return { darkMode: newTheme };
  }),
}));

export default useThemeStore;
