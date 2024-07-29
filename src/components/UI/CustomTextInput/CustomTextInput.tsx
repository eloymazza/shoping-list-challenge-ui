import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { FC } from "react";

type CustomTextInputProps = OutlinedInputProps & {
  error: boolean;
  errorMessage: string;
};

const CustomTextInput: FC<CustomTextInputProps> = ({
  errorMessage,
  error,
  ...props
}) => {
  console.log(errorMessage);
  return (
    <FormControl variant="outlined">
      <OutlinedInput sx={{ height: "50px" }} {...props} />
      {error && (
        <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomTextInput;
