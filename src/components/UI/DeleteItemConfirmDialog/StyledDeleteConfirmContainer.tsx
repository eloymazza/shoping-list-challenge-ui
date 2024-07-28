import { styled } from "@mui/material";

export const StyledDeleteItemConfirmContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
  maxWidth: "450px",
}));

export const StyledDeleteItemContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const StyledDeleteButtonsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(2),
}));
