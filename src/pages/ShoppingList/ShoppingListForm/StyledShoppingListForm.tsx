import { FormControlLabel, styled, Typography } from "@mui/material";

export const StyledSFormContainer = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "88dvh",
}));

export const StyledFormHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.grey[700],
  textAlign: "center",
  backgroundColor: theme.palette.grey[100],
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  width: "100%",
}));

export const StyledFormBody = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  width: "100%",
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  marginBottom: theme.spacing(2),
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

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.grey[700],
  "& .MuiFormControlLabel-label": {
    marginTop: "0.25rem",
  },
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
