import { useAppSelector } from "../../store/hooks";
import {
  StyledShoppingListContainer,
  StyledEmptyListMessageContainer,
} from "./StyledShoppingList";
import EmptyListMessage from "./EmptyListMessage/EmptyListMessage";
import ShoppingList from "./ShoppingList/ShoppingList";

const ShoppingListPage = () => {
  const { items, error, status } = useAppSelector(
    (state) => state.shoppingList
  );

  const showList = items.length > 0;

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
