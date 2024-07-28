import { Button } from "@mui/material";
import { useState } from "react";
import {
  StyledCardContent,
  StyledEmptyListCardContainer,
  StyledMessage,
} from "./StyledEmptyListMessage";
import ShoppingListFormDialog from "../../../components/UI/ShoppingListFormDialog/ShoppingListFormDialog";

const EmptyListMessage = () => {
  const [showAddItemDialog, setShowAddItemDialog] = useState(false);

  const handleAddDialogClose = () => {
    setShowAddItemDialog(false);
  };

  const onShowShoppingListClick = () => {
    setShowAddItemDialog(true);
  };

  return (
    <StyledEmptyListCardContainer elevation={0}>
      <StyledCardContent>
        <StyledMessage>{`Your Shopping list is empty :(`}</StyledMessage>
        <Button
          type="button"
          variant="contained"
          onClick={onShowShoppingListClick}
        >
          Add your first item
        </Button>
      </StyledCardContent>
      <ShoppingListFormDialog
        showDialog={showAddItemDialog}
        handleClose={handleAddDialogClose}
      />
    </StyledEmptyListCardContainer>
  );
};

export default EmptyListMessage;
