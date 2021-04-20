import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/textField";
import BasicTextField from "../lib/basic_text_field";

import isURL from "validator/lib/isURL";
import isAlpha from "validator/lib/isAlpha";

const NewCompanyFields = ({ company, setCompany }) => {
  const [website, setWebsite] = useState("");

  const handleChange = (e) => {
    const valueName = e.target.name;
    const value = e.target.value;
    if (valueName === "ticker" && !isAlpha(value)) return;

    setCompany({ ...company, [valueName]: value });
  };

  useEffect(() => {
    console.log(isURL(website));
    if (isURL(website))
      setCompany({ ...company, logo: `//logo.clearbit.com/${website}` });
  }, [website]);

  return (
    <>
      <img width="100px" height="100px" src={company.logo} />
      <BasicTextField
        id="name"
        label="Name"
        value={company.name}
        onChangeCallback={handleChange}
      />
      <TextField
        margin="dense"
        fullWidth
        id="website"
        name="website"
        label="Company Website"
        value={website}
        type="url"
        onChange={(e) => {
          setWebsite(e.target.value);
        }}
      />
      <BasicTextField
        id="ticker"
        label="Ticker Symbol"
        value={company.ticker}
        onChangeCallback={handleChange}
      />
      <BasicTextField
        id="sector"
        label="Company Sector/Industry"
        value={company.sector}
        onChangeCallback={handleChange}
      />
    </>
  );
};

export default NewCompanyFields;
