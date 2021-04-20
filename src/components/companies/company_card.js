import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const CompanyCard = ({
  logo,
  _id,
  name,
  ticker,
  latestPrice,
  sector,
  onRemove,
}) => {
  return (
    <Card>
      <CardHeader
        avatar={<img src={logo} alt="" className="company-card-image" />}
        action={
          <IconButton aria-label="settings" onClick={() => onRemove(_id)}>
            <CloseIcon />
          </IconButton>
        }
        title={name}
        subheader={ticker}
        className="company-card-header"
      />
      <CardContent>
        <h5>Latest Price: ${latestPrice}</h5>
        <h5>Sector: {sector}</h5>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default CompanyCard;
