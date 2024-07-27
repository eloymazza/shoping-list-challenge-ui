import { styled } from "@mui/material";

export const StyledShoppingListContainer = styled("section")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  justifyContent: "center",
  height: "100%",
}));

export const StyledEmptyListMessageContainer = styled("article")(
  ({ theme }) => ({
    marginTop: theme.spacing(10),
    width: "100%",
    display: "flex",
    justifyContent: "center",
  })
);
