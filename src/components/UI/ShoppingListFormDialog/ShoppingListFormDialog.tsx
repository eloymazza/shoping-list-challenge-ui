import { Dialog } from "@mui/material";
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
    <Dialog open={showDialog} onClose={handleClose}>
      <ShoppingListForm item={item} onClose={handleClose} />
    </Dialog>
  );
};

export default ShoppingListFormDialog;
