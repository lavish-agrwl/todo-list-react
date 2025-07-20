import { createContext, useContext } from "react";

const [theme, setTheme] = useState("light");
const themeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
export const useThemeContext = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}