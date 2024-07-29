import { Button, IconButton, Typography } from "@mui/material";
import {
  StyledForm,
  StyledFormAction,
  StyledFormActionsContainer,
  StyledFormBody,
  StyledFormControls,
  StyledFormHeader,
  StyledSFormContainer,
  StyledSubtitle,
} from "./StyledShoppingListForm";
import { FC, useState } from "react";
// TODO: use "@" import path
import CustomTextArea from "../../../components/UI/CustomTextArea/CustomTextArea";
import CustomTextInput from "../../../components/UI/CustomTextInput/CustomTextInput";
import CustomSelect from "../../../components/UI/CustomSelect/CustomSelect";
import { useAppDispatch } from "../../../store/hooks";
import { addItem, editItem } from "../../../store/features/shoppingListSlice";
import { Item } from "../../../types/types";

type ShoppingListFormProps = {
  onClose: () => void;
  item?: Item;
};

type FormError = {
  error: boolean;
  message: string;
};

// TODO: improve this form component splitting responsibilities
const ShoppingListForm: FC<ShoppingListFormProps> = ({ onClose, item }) => {
  const DESCRIPTION_MAX_LENGTH = 100;
  const QUANTITY_OPTIONS = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

  const [nameError, setNameError] = useState<FormError>({
    error: false,
    message: "",
  });

  const [descriptionError, setDescriptionError] = useState<FormError>({
    error: false,
    message: "",
  });

  const isEditing = Boolean(item);
  const dispatch = useAppDispatch();

  const getItemData = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    return {
      id: item?.id || crypto.randomUUID().toString(),
      ...data,
    } as Item;
  };

  const validateForm = (itemData: Item) => {
    let valid = true;
    if (!itemData.name) {
      setNameError({
        error: true,
        message: "Item name cannot be empty",
      });
      valid = false;
    }
    if (!itemData.description) {
      setDescriptionError({
        error: true,
        message: "Item description cannot be empty",
      });
      valid = false;
    }
    return valid;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItemData = getItemData(event.currentTarget);
    if (!validateForm(newItemData)) return;
    if (isEditing) {
      dispatch(editItem(newItemData));
    } else {
      dispatch(addItem(newItemData));
    }
    onClose();
  };

  return (
    <StyledSFormContainer>
      <StyledFormHeader>
        <Typography variant="h3" letterSpacing={".25px"} component="span">
          SHOPPING LIST
        </Typography>
        <IconButton className="material-icons" onClick={onClose}>
          close
        </IconButton>
      </StyledFormHeader>
      <StyledFormBody>
        <Typography variant="body1"> Add an Item </Typography>
        <StyledSubtitle variant="body2">Add your new item below</StyledSubtitle>
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledFormControls>
            <CustomTextInput
              placeholder="Item Name"
              name="name"
              defaultValue={item?.name}
              errorMessage={nameError.message}
              error={nameError.error}
            />
            <CustomTextArea
              error={descriptionError.error}
              errorMessage={descriptionError.message}
              value={item?.description}
              placeholder="Description"
              name="description"
              charsLimit={DESCRIPTION_MAX_LENGTH}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
            <CustomSelect
              placeholder="How many?"
              defaultValue={item?.quantity.toString()}
              options={QUANTITY_OPTIONS}
              name="quantity"
            />
          </StyledFormControls>
          <StyledFormActionsContainer>
            <StyledFormAction>
              <Button type="button" variant="text" onClick={onClose}>
                Cancel
              </Button>
            </StyledFormAction>
            <StyledFormAction>
              <Button type="submit" variant="contained">
                {isEditing ? "Edit Item" : "Add Item"}
              </Button>
            </StyledFormAction>
          </StyledFormActionsContainer>
        </StyledForm>
      </StyledFormBody>
    </StyledSFormContainer>
  );
};

export default ShoppingListForm;
