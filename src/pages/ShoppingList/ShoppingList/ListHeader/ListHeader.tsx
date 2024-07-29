import { Button, Typography } from "@mui/material";
import { useState } from "react";
import ShoppingListFormDialog from "../../../../components/UI/ShoppingListFormDialog/ShoppingListFormDialog";
import { StyledItemsListHeader } from "./StyledListHeader";

const ListHeader = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <StyledItemsListHeader>
        <Typography variant="h4">Your Items</Typography>
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
