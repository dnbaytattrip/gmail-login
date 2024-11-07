import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useField } from "formik";

function CheckboxField({ name, label, ...props }) {
  const [field, meta] = useField(name);

  const configCheckbox = {
    ...field,
    ...props,
    // fullWidth: true,
    // variant: "outlined",
    // variant: "filled",
    // color: "warning",
    // helperText: helpertext,
  };

  return (
    <FormControlLabel
      className="text-slate-200"
      control={
        <Checkbox
          {...configCheckbox}
          sx={{
            color: "gray",
            "&.Mui-checked": {
              color: "yellow",
            },
            "& .MuiSvgIcon-root": { fontSize: 21 },
          }}
        />
      }
      label={label}
    />
  );
}

export default CheckboxField;
