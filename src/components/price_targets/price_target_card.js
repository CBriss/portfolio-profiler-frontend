import React from "react";

import HoverableText from "../lib/hoverable_text";

import { Paper, Typography } from "@material-ui/core";

const PriceTargetCard = ({ lowEstimate5Yr, company, highEstimate5Yr }) => {
  const defaultBuyValue = `${Math.round(
    ((lowEstimate5Yr - company.latestPrice) * 100) / lowEstimate5Yr
  )}% From Low 5-Year Estimate`;
  const defaultSellValue = `${Math.round(
    ((highEstimate5Yr - company.latestPrice) * 100) / company.latestPrice
  )}% From High 5-Year Estimate`;

  return (
    <Paper variant="outlined">
      <img src={company.logo} alt="" />
      <Typography>{company.name}</Typography>
      <Typography>Latest Price ${company.latestPrice}</Typography>
      <HoverableText
        default_value={defaultBuyValue}
        hover_value={`Buy Target: $${lowEstimate5Yr}`}
      />
      <HoverableText
        default_value={defaultSellValue}
        hover_value={`Sell Target: $${highEstimate5Yr}`}
      />
    </Paper>
  );
};

export default PriceTargetCard;
