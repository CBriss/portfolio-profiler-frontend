import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import NewCompanyFields from "./new_company_fields";

import { createCompany } from "../../actions/companies.js";

const NewCompany = ({ updateListCallback }) => {
  const defaultCompany = {
    name: "",
    ticker: "",
    logo: "",
    website: "",
    sector: "",
  };

  const [show, setShow] = useState(false);
  const [company, setCompany] = useState(defaultCompany);

  const handleOpenClose = (newValue) => {
    setShow(newValue);
    if (newValue === true) setCompany(defaultCompany);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newCompany(company);
    setShow(false);
  };

  const newCompany = (company) => {
    createCompany(company)
      .then((response) => {
        updateListCallback(response);
      })
      .catch((error) => console.log(error));
  };

  const buttonStyles = {
    position: "absolute",
    right: "0",
    left: "0",
    margin: "auto",
  };

  return (
    <>
      <Button
        onClick={() => handleOpenClose(true)}
        variant="contained"
        color="primary"
        style={buttonStyles}
      >
        New Company
      </Button>

      <Dialog
        open={show}
        onClose={() => handleOpenClose(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Company</DialogTitle>
        <DialogContent>
          <NewCompanyFields company={company} setCompany={setCompany} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOpenClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewCompany;
