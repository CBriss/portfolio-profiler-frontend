import React, { useState } from "react";

import Button from "@material-ui/core/button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import NewPriceTargetFields from "./new_price_target_fields";

import { createPriceTarget } from "../../actions/price_targets.js";

const NewPriceTarget = ({ updateListCallback }) => {
  const defaultPriceTarget = {
    company: "",
    lowEstimate5Yr: 0,
    highEstimate5Yr: 0,
  };

  const [show, setShow] = useState(false);
  const [priceTarget, setPriceTarget] = useState(defaultPriceTarget);

  const handleOpenClose = (newValue) => {
    setShow(newValue);
    if (newValue === true) setPriceTarget(defaultPriceTarget);
  };

  const newPriceTarget = (priceTarget) => {
    createPriceTarget(priceTarget)
      .then((response) => {
        updateListCallback(response);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newPriceTarget(priceTarget);
    setShow(false);
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
        New Price Target
      </Button>

      <Dialog
        open={show}
        onClose={() => handleOpenClose(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Price Target</DialogTitle>
        <DialogContent>
          <NewPriceTargetFields
            priceTarget={priceTarget}
            setPriceTarget={setPriceTarget}
          />
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

export default NewPriceTarget;
