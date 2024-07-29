import { styled } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: "100%",
  color: theme.palette.primary.contrastText,
  fontSize: "1.25rem",
  fontFamily: `"Dosis", sans-serif`,
  padding: theme.spacing(2),
}));

export default Header;
