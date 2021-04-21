import React from "react";

import HoverableText from "../lib/hoverable_text";

import {
  Paper,
  Typography,
  IconButton,
  Grid,
  ButtonBase,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const PriceTargetCard = ({
  _id,
  lowEstimate5Yr,
  company,
  highEstimate5Yr,
  onRemove,
}) => {
  const defaultBuyValue = `Low 5-Year Estimate: ${Math.round(
    ((lowEstimate5Yr - company.latestPrice) * 100) / lowEstimate5Yr
  )}%`;
  const defaultSellValue = `High 5-Year Estimate: ${Math.round(
    ((highEstimate5Yr - company.latestPrice) * 100) / company.latestPrice
  )}% `;

  return (
    <Paper variant="outlined">
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase>
            <img height="75" src={company.logo} alt="" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {company.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Latest Price ${company.latestPrice}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm>
          <HoverableText
            default_value={defaultBuyValue}
            hover_value={`Buy Target: $${lowEstimate5Yr}`}
          />
          <HoverableText
            default_value={defaultSellValue}
            hover_value={`Sell Target: $${highEstimate5Yr}`}
          />
        </Grid>
        <Grid item>
          <IconButton aria-label="settings" onClick={() => onRemove(_id)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PriceTargetCard;
