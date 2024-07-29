import { Checkbox, IconButton } from "@mui/material";
import { FC, useState } from "react";
import { Item } from "../../../../types/types";
import {
  StyledItemContent,
  StyledItemDescription,
  StyledItemTitle,
  StyledListActionsContainer,
  StyledListItem,
} from "./StyledListItem";
import ShoppingListFormDialog from "../../../../components/UI/ShoppingListFormDialog/ShoppingListFormDialog";
import DeleteItemConfirmDialog from "../../../../components/UI/DeleteItemConfirmDialog/DeleteItemConfirmDialog";
import { useAppDispatch } from "../../../../store/hooks";
import { editItem } from "../../../../store/features/shoppingListSlice";

type ListItemProps = {
  item: Item;
};
const ListItem: FC<ListItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [itemToEdit, setItemToEdit] = useState<Item>();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false);

  const handleCheckboxClick = (item: Item) => {
    dispatch(
      editItem({
        ...item,
        checked: !item.checked,
      })
    );
  };

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
        <Checkbox
          checked={item.checked}
          onClick={() => handleCheckboxClick(item)}
        />
        <StyledItemContent>
          <StyledItemTitle
            variant="h4"
            className={item.checked ? "strike-through" : ""}
          >
            {item.name}
          </StyledItemTitle>
          <StyledItemDescription
            variant="h5"
            className={item.checked ? "strike-through" : ""}
          >
            {item.description}
          </StyledItemDescription>
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
