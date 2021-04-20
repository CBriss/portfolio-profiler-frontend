import React from "react";
import TextField from "@material-ui/core/textField";

const BasicTextField = ({ id, label, value, onChangeCallback }) => {
  return (
    <>
      <TextField
        id={id}
        name={id}
        label={label}
        value={value}
        margin="dense"
        fullWidth
        onChange={(e) => {
          onChangeCallback(e);
        }}
      />
    </>
  );
};

export default BasicTextField;
