import { Checkbox, IconButton } from "@mui/material";
import { FC, useState } from "react";
import { Item } from "../../../../types/types";
import {
  StyledDescription,
  StyledItemContent,
  StyledListActionsContainer,
  StyledListItem,
  StyledTitle,
} from "./StyledListItem";
import ShoppingListFormDialog from "../../../../components/UI/ShoppingListFormDialog/ShoppingListFormDialog";
import DeleteItemConfirmDialog from "../../../../components/UI/DeleteItemConfirmDialog/DeleteItemConfirmDialog";

type ListItemProps = {
  item: Item;
};
// TODO onEdit and onDeletecan be handled in this component using redux, but a dialgo open/close state is needed
const ListItem: FC<ListItemProps> = ({ item }) => {
  const [itemToEdit, setItemToEdit] = useState<Item>();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false);

  const handleCheckboxClick = () => {};

  const handleEditItem = (item: Item) => {
    setShowEditDialog(true);
    setItemToEdit(item);
  };

  const handleDeleteItemClick = () => {
    setShowDeleteConfirmDialog(true);
  };

  return (
    <>
      <StyledListItem key={item.id}>
        <div>
          <Checkbox onClick={handleCheckboxClick} />
        </div>
        <StyledItemContent>
          <StyledTitle>{item.name}</StyledTitle>
          <StyledDescription>{item.description}</StyledDescription>
        </StyledItemContent>
        <StyledListActionsContainer>
          <IconButton
            className="material-icons"
            onClick={() => handleEditItem(item)}
          >
            edit
          </IconButton>{" "}
          <IconButton
            className="material-icons"
            onClick={() => handleDeleteItemClick()}
          >
            delete
          </IconButton>
        </StyledListActionsContainer>
      </StyledListItem>
      <ShoppingListFormDialog
        item={itemToEdit}
        showDialog={showEditDialog}
        handleClose={() => setShowEditDialog(false)}
      />
      <DeleteItemConfirmDialog
        showDialog={showDeleteConfirmDialog}
        handleClose={() => setShowDeleteConfirmDialog(false)}
        itemId={item.id}
      />
    </>
  );
};

export default ListItem;
