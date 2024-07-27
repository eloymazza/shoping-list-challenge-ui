import { Card, styled } from "@mui/material";

export const StyledEmptyListCardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[400]}`,
  padding: theme.spacing(2),
  width: "450px",
  minHeight: "250px",
  maxHeight: "200px",
}));

export const StyledCardContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledMessage = styled("p")(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  color: theme.palette.grey[600],
}));
