import { FC } from "react";
import { Item } from "../../../types/types";
import { StyledItemList, StyledItemsContainer } from "./StyledShoppingList";
import ListItem from "./ListItem/ListItem";
import ListHeader from "./ListHeader/ListHeader";

type ShoppingListProps = {
  items: Item[];
};

const ShoppingList: FC<ShoppingListProps> = ({ items }) => {
  return (
    <>
      <StyledItemsContainer>
        <ListHeader />
        <StyledItemList>
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </StyledItemList>
      </StyledItemsContainer>
    </>
  );
};

export default ShoppingList;
