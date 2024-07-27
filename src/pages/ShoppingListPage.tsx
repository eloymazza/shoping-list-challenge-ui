import { useAppSelector } from "../store/hooks";

const ShoppingListPage = () => {
  const { items, error, status } = useAppSelector(
    (state) => state.shoppingList
  );

  console.log(items, error, status);

  return <div>Shopping List</div>;
};

export default ShoppingListPage;
