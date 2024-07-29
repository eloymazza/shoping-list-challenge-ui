import { Dialog, styled } from "@mui/material";
import { FC } from "react";
import ShoppingListForm from "../../../pages/ShoppingList/ShoppingListForm/ShoppingListForm";
import { Item } from "../../../types/types";

type ShoppingListFormDialogProps = {
  item?: Item;
  showDialog: boolean;
  handleClose: () => void;
};

// TODO move dialog to be wrapper
const ShoppingListFormDialog: FC<ShoppingListFormDialogProps> = ({
  item,
  showDialog,
  handleClose,
}) => {
  return (
    <StyledFormDialog open={showDialog} onClose={handleClose}>
      <ShoppingListForm item={item} onClose={handleClose} />
    </StyledFormDialog>
  );
};

const StyledFormDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: "100%",
  },
});

export default ShoppingListFormDialog;
