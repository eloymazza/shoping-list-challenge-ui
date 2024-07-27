import { FC } from "react";
import Header from "./Header";
import { styled } from "@mui/material";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <StyledLayoutContainer>
      {/* TODO: Make this title dynamic */}
      <Header>SHOPOING LIST</Header>
      <StyledMain>{children}</StyledMain>
    </StyledLayoutContainer>
  );
};

const StyledLayoutContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

const StyledMain = styled("main")({
  flexGrow: 1,
});

export default RootLayout;
