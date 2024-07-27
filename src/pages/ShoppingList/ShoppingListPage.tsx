import { useState } from "react";
import { useAppSelector } from "../../store/hooks";

import {
  StyledShoppingListContainer,
  StyledEmptyListMessageContainer,
} from "./StyledShoppingList";
import { Dialog } from "@mui/material";
import EmptyListMessage from "./EmptyListMessage/EmptyListMessage";

const ShoppingListPage = () => {
  const [showShoppingListForm, setShowShoppingListForm] = useState(false);
  const { items, error, status } = useAppSelector(
    (state) => state.shoppingList
  );
  const showList = status === "succeeded" && items.length > 0;

  const handleShowShoppingListClick = () => {
    setShowShoppingListForm(true);
  };

  return (
    <StyledShoppingListContainer>
      {showList ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <StyledEmptyListMessageContainer>
          <EmptyListMessage
            handleShowShoppingListClick={handleShowShoppingListClick}
          />
        </StyledEmptyListMessageContainer>
      )}
      <Dialog
        open={showShoppingListForm}
        onClose={() => setShowShoppingListForm(false)}
      />
    </StyledShoppingListContainer>
  );
};

export default ShoppingListPage;
