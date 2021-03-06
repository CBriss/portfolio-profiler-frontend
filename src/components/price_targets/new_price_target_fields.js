import React, { useState, useEffect } from "react";

import { TextField, FormControl, InputLabel, Select } from "@material-ui/core";

import { listCompanies } from "../../actions/companies";

const NewPriceTargetFields = ({ priceTarget, setPriceTarget }) => {
  const [companyList, setCompanyList] = useState({});

  const handleChange = (e) => {
    const valueName = e.target.name;
    const value = e.target.value;

    setPriceTarget({ ...priceTarget, [valueName]: value });
  };

  useEffect(() => {
    getCompanyList();
  }, []);

  const getCompanyList = () => {
    listCompanies()
      .then((response) => {
        setCompanyList(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FormControl>
      <InputLabel htmlFor="company-select">Company</InputLabel>
      <Select
        native
        defaultValue=""
        id="company-select"
        name="company"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value=""></option>
        {Object.entries(companyList).map(([name, id]) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </Select>
      <TextField
        margin="dense"
        fullWidth
        id="lowEstimate5Yr"
        name="lowEstimate5Yr"
        label="Low 5-year Estimate"
        value={priceTarget.lowEstimate5Yr}
        type="number"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <TextField
        margin="dense"
        fullWidth
        id="highEstimate5Yr"
        name="highEstimate5Yr"
        label="High 5-year Estimate"
        value={priceTarget.highEstimate5Yr}
        type="number"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </FormControl>
  );
};

export default NewPriceTargetFields;
