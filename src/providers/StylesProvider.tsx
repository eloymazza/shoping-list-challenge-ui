import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { ReactNode } from "react";
import { theme } from "../theme/theme";
import GlobalStyles from "../theme/GlobalStyles";

type Props = {
  children: ReactNode;
};

const StylesProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StylesProvider;
