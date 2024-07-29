import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1871e8",
      dark: "#4d81b7",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "normal",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "600",
      fontFamily: `"Dosis", sans-serif`,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "500",
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "0.95rem",
      fontFamily: `"Nunito", sans-serif`,
    },
    body2: {
      fontSize: "0.875rem",
      fontFamily: `"Nunito", sans-serif`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
