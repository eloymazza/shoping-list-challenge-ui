import { styled } from "@mui/material";
import { List } from "@mui/material";

export const StyledItemsContainer = styled("section")({
  width: "90%",
  paddingTop: "1rem",
  maxWidth: "1000px",
});

export const StyledItemList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  listStyleType: "none",
  padding: 0,
}));
