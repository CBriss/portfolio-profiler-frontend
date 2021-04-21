import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
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
        <Typography variant="subtitle2">
          Latest Price: ${latestPrice}
        </Typography>
        <Typography variant="caption">Sector: {sector}</Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
