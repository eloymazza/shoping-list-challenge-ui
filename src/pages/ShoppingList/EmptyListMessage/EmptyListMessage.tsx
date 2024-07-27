import { Button } from "@mui/material";
import { FC } from "react";
import {
  StyledCardContent,
  StyledEmptyListCardContainer,
  StyledMessage,
} from "./StyledEmptyListMessage";

type EmptyListMessageProps = {
  handleShowShoppingListClick: () => void;
};

const EmptyListMessage: FC<EmptyListMessageProps> = ({
  handleShowShoppingListClick,
}) => {
  const onShowShoppingListClick = () => {
    handleShowShoppingListClick();
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
    </StyledEmptyListCardContainer>
  );
};

export default EmptyListMessage;
