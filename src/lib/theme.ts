export const THEME_STORAGE_KEY = "williamtheodorus-theme";

export type Theme = "light" | "dark";

export const isTheme = (value: string | null): value is Theme =>
  value === "light" || value === "dark";
