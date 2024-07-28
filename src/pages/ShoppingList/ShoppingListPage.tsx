import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  StyledShoppingListContainer,
  StyledEmptyListMessageContainer,
} from "./StyledShoppingList";
import EmptyListMessage from "./EmptyListMessage/EmptyListMessage";
import ShoppingList from "./ShoppingList/ShoppingList";
import { useEffect } from "react";
import { fetchItems } from "../../store/features/shoppingListSlice";

const ShoppingListPage = () => {
  // TODO: move to custom hook
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.shoppingList);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [status]);

  const showList = items.length > 0;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <StyledShoppingListContainer>
      {showList ? (
        <ShoppingList items={items} />
      ) : (
        <StyledEmptyListMessageContainer>
          <EmptyListMessage />
        </StyledEmptyListMessageContainer>
      )}
    </StyledShoppingListContainer>
  );
};

export default ShoppingListPage;
