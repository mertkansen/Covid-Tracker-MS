import React from "react";
import "../../styles/InfoBox.css";

import { Card, Typography, CardContent } from "@material-ui/core";

const Infobox = ({ title, cases, isGreen, total, active, ...props }) => (
  <Card
    onClick={props.onClick}
    className={`infoBox ${active && "infoBox--selected"} ${
      isGreen && "infoBox--green"
    }`}
  >
    <CardContent>
      <Typography className="infoBox__title" color="textSecondary">
        {title}
      </Typography>
      <h2 className={`infoBox__cases ${isGreen && "infoBox__cases--green"}`}>
        {cases}
      </h2>
      <Typography className="infoBox__total" color="textSecondary">
        {total}
      </Typography>
    </CardContent>
  </Card>
);

export default Infobox;
