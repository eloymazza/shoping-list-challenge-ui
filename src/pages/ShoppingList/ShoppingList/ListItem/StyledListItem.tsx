import { styled, Typography } from "@mui/material";
import { ListItem } from "@mui/material";

export const StyledListItem = styled(ListItem)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "1rem 1rem",
  border: `1px solid #d5dfe9`,
  borderRadius: "5px",
}));

export const StyledItemContent = styled("div")({
  flexGrow: 1,
  marginLeft: "1rem",
  fontSize: "1.2rem",
});

export const StyledItemTitle = styled(Typography)({
  marginBottom: "0.25rem",
});

export const StyledItemDescription = styled(Typography)({
  color: "#666",
});

export const StyledListActionsContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
