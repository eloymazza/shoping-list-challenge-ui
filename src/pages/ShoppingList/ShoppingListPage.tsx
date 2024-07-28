import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import {
  StyledShoppingListContainer,
  StyledEmptyListMessageContainer,
} from "./StyledShoppingList";
import { Dialog, IconButton } from "@mui/material";
import EmptyListMessage from "./EmptyListMessage/EmptyListMessage";
import ShoppingListForm from "./ShoppingListForm/ShoppingListForm";
import { Item } from "../../types/types";

const ShoppingListPage = () => {
  const [showShoppingListForm, setShowShoppingListForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Item>();
  const { items, error, status } = useAppSelector(
    (state) => state.shoppingList
  );

  const showList = items.length > 0;

  const handleShowShoppingListClick = () => {
    setShowShoppingListForm(true);
  };

  const handleShowShoppingListClose = () => {
    setShowShoppingListForm(false);
  };

  const handleEditItemClick = (item: Item) => {
    console.log("Edit item clicked");
    setShowShoppingListForm(true);
    setEditingItem(item);
  };

  return (
    <StyledShoppingListContainer>
      {showList ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <IconButton
                className="material-icons"
                onClick={() => handleEditItemClick(item)}
              >
                edit
              </IconButton>
            </li>
          ))}
        </ul>
      ) : (
        <StyledEmptyListMessageContainer>
          <EmptyListMessage
            handleShowShoppingListClick={handleShowShoppingListClick}
          />
        </StyledEmptyListMessageContainer>
      )}
      {/* TODO Move ths insde empty message list */}
      <Dialog open={showShoppingListForm} onClose={handleShowShoppingListClose}>
        <ShoppingListForm
          item={editingItem}
          onClose={handleShowShoppingListClose}
        />
      </Dialog>
    </StyledShoppingListContainer>
  );
};

export default ShoppingListPage;
