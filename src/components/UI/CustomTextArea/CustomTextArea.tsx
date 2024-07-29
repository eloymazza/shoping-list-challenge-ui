import React from "react";
import {
  Box,
  TextField,
  Typography,
  TextFieldProps,
  FormHelperText,
  FormControl,
} from "@mui/material";

interface CustomTextAreaProps {
  errorMessage: string;
  placeholder: string;
  error: boolean;
  charsLimit: number;
  value?: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps & TextFieldProps> = ({
  charsLimit,
  errorMessage,
  error,
  value,
  ...props
}) => {
  const [text, setText] = React.useState(value || "");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const textLength = text.length;
    if (textLength >= charsLimit) {
      setText(text.slice(0, charsLimit));
      return;
    }
    setText(event.target.value);
  };

  return (
    <FormControl>
      <TextField
        sx={{ position: "relative" }}
        onChange={handleTextChange}
        value={text}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                padding: ".5rem",
              }}
            >
              <Typography
                sx={{ color: text.length >= charsLimit ? "red" : "initial" }}
                variant="body2"
              >
                {text.length}/{charsLimit}
              </Typography>
            </Box>
          ),
        }}
        {...props}
      />
      {error && (
        <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomTextArea;
