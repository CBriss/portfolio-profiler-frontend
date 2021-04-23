import React, { useState, useReducer } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import NewCompanyFields from "./new_company_fields";
import { createCompany } from "../../actions/companies.js";
import isAlpha from "validator/lib/isAlpha";
import isURL from "validator/lib/isURL";

const defaultCompany = {
  name: "",
  ticker: "",
  logo: "",
  website: "",
  sector: "",
};

function reducer(company, action) {
  switch (action.type) {
    case "website":
      if (isURL(action.payload)) {
        return {
          ...company,
          logo: `//logo.clearbit.com/${action.payload}`,
          website: action.payload,
        };
      }
      return {
        ...company,
        logo: "",
        website: action.payload,
      };
    case "ticker":
      if (isAlpha(action.payload))
        return {
          ...company,
          ticker: action.payload,
        };
      return { ...company };
    case "default":
      return defaultCompany;
    default:
      return {
        ...company,
        [action.type]: action.payload,
      };
  }
}

const NewCompany = ({ updateListCallback }) => {
  const [show, setShow] = useState(false);
  const [company, dispatch] = useReducer(reducer, defaultCompany);

  const handleOpenClose = (newValue) => {
    setShow(newValue);
    if (newValue === true) dispatch({ type: "default" });
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
          <NewCompanyFields company={company} dispatch={dispatch} />
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
