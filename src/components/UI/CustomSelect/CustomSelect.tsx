import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";

export type QuantityOption = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: QuantityOption[];
};

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  options,
  defaultValue,
  ...props
}) => {
  const [firstOption] = options;
  return (
    <FormControl sx={{ width: "100%" }}>
      <Select defaultValue={defaultValue || firstOption.value} {...props}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>

      {/* TODO  <FormHelperText>Without label</FormHelperText> */}
    </FormControl>
  );
};

export default CustomSelect;
