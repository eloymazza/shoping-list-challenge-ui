import { styled } from "@mui/material";
import { ListItem } from "@mui/material";

export const StyledListItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem 1rem",
  borderBottom: "1px solid #ccc",
  "&:last-child": {
    borderBottom: "none",
  },
});

export const StyledItemContent = styled("div")({
  flexGrow: 1,
  marginLeft: "1rem",
  fontSize: "1.2rem",
});

export const StyledTitle = styled("span")({
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export const StyledDescription = styled("p")({
  fontSize: "1rem",
  color: "#666",
});

export const StyledListActionsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
