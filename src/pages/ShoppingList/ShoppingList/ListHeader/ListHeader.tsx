import { Button } from "@mui/material";
import { useState } from "react";
import ShoppingListFormDialog from "../../../../components/UI/ShoppingListFormDialog/ShoppingListFormDialog";
import { StyledItemsListHeader } from "./StyledListHeader";

const ListHeader = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <StyledItemsListHeader>
        <span>Your Items</span>
        <Button
          variant="contained"
          size="small"
          onClick={() => setShowDialog(true)}
        >
          Add Item
        </Button>
      </StyledItemsListHeader>
      <ShoppingListFormDialog
        showDialog={showDialog}
        handleClose={() => setShowDialog(false)}
      />
    </>
  );
};

export default ListHeader;
