import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

const GlobalStyles = () => {
  return (
    <MUIGlobalStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          height: "100vh",
        },
        body: {
          height: "100%",
          maxWidth: "100vw",
        },
        "#root": {
          height: "100%",
          "& .strike-through": {
            textDecoration: "line-through",
          },
        },
      }}
    />
  );
};

export default GlobalStyles;
