import { Button } from "@mui/material";
import {
  StyledForm,
  StyledFormAction,
  StyledFormActionsContainer,
  StyledFormBody,
  StyledFormControls,
  StyledFormHeader,
  StyledSFormContainer,
} from "./StyledShoppingListForm";
import { FC } from "react";
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

// TODO: improve this form component splitting responsibilities
const ShoppingListForm: FC<ShoppingListFormProps> = ({ onClose, item }) => {
  const DESCRIPTION_MAX_LENGTH = 100;
  const QUANTITY_OPTIONS = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];
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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItemData = getItemData(event.currentTarget);
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
        <span>SHOPPING LIST</span>
        <span>X</span>
      </StyledFormHeader>
      <StyledFormBody>
        <h3> Add an item </h3>
        <p>Add your new item below</p>
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledFormControls>
            <CustomTextInput
              placeholder="Item Name"
              name="name"
              defaultValue={item?.name}
            />
            <CustomTextArea
              value={item?.description}
              placeholder="Description"
              name="description"
              charsLimit={DESCRIPTION_MAX_LENGTH}
              multiline
              rows={6}
              variant="outlined"
              fullWidth
            />
            <CustomSelect
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
