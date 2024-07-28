import { Button, Dialog } from "@mui/material";
import { FC } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { removeItem } from "../../../store/features/shoppingListSlice";
import {
  StyledDeleteButtonsContainer,
  StyledDeleteItemConfirmContainer,
  StyledDeleteItemContent,
} from "./StyledDeleteConfirmContainer";

type DeleteConfirmDialogProps = {
  showDialog: boolean;
  handleClose: () => void;
  itemId: string;
};

const DeleteItemConfirmDialog: FC<DeleteConfirmDialogProps> = ({
  showDialog,
  handleClose,
  itemId,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteConfirm = (id: string) => {
    dispatch(removeItem(id));
    handleClose();
  };

  return (
    <Dialog open={showDialog} onClose={handleClose}>
      <StyledDeleteItemConfirmContainer>
        <StyledDeleteItemContent>
          <h4>Delete Item?</h4>
          <span>
            Are you sure you want to delete this item? This cannot be undone
          </span>
        </StyledDeleteItemContent>
        <StyledDeleteButtonsContainer>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => handleDeleteConfirm(itemId)}
          >
            Delete
          </Button>
        </StyledDeleteButtonsContainer>
      </StyledDeleteItemConfirmContainer>
    </Dialog>
  );
};

export default DeleteItemConfirmDialog;
