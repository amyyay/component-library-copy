import * as React from "react";
import { ThemeProvider as Provider } from "styled-components";

export interface Theme {
  color: {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    medium: string;
  };
}

const defaultTheme: Theme = {
  color: {
    primary: "#26374a",
    secondary: "#fff",
    light: "#f3f5f6",
    dark: "#001223",
    medium: "#cad0d5",
  },
};

export const ThemeProvider: React.FC = ({ children }) => (
  <Provider theme={defaultTheme}>{children}</Provider>
);
