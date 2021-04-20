import { Typography } from "@material-ui/core";
import React from "react";

const HoverableText = ({ default_value, hover_value }) => {
  const [value, setValue] = React.useState(default_value);

  return (
    <Typography
      onMouseOver={() => {
        setValue(hover_value);
      }}
      onMouseLeave={() => {
        setValue(default_value);
      }}
    >
      {value}
    </Typography>
  );
};

export default HoverableText;
