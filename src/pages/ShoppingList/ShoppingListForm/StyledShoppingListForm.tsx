import { styled } from "@mui/material";

export const StyledSFormContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "500px",
  height: "88dvh",
}));

export const StyledFormHeader = styled("div")(({ theme }) => ({
  color: theme.palette.grey[800],
  fontSize: "1rem",
  fontWeight: "bold",
  textAlign: "center",
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(2),
  width: "100%",
}));

export const StyledFormBody = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  padding: theme.spacing(2),
  width: "100%",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const StyledFormControls = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const StyledFormActionsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "end",
  gap: theme.spacing(2),
}));

export const StyledFormAction = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  gap: theme.spacing(2),
}));
