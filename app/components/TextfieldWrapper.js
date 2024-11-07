import { TextField } from "@mui/material";
import { useField, ErrorMessage } from "formik";

function TextfieldWrapper({ name, ...props }) {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...props,
    fullWidth: true,
    // variant: "outlined",
    variant: "filled",
    color: "warning",
    // helperText: helpertext,
  };

  // if (meta && meta.touched && meta.error) {
  //   configTextfield.error = true;
  //   configTextfield.helperText = meta.error;
  // }

  return (
    <TextField
      {...configTextfield}
      className="bg-white rounded"
      sx={{
        "& label.Mui-focused": {
          color: "#f3b917",
        },
      }}
    />
  );

  // <p className="absolute -bottom-4 text-red-600 text-xs">
  //         <ErrorMessage {...props} />
  //       </p>
}

export default TextfieldWrapper;
