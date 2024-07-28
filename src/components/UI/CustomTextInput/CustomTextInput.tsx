import { FormControl, OutlinedInput, OutlinedInputProps } from "@mui/material";
// id="outlined-adornment-weight"
const CustomTextInput = (props: OutlinedInputProps) => {
  return (
    <FormControl variant="outlined">
      <OutlinedInput {...props} />
    </FormControl>
  );
};

export default CustomTextInput;
