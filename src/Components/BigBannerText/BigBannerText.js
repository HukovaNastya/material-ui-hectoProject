import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bigTitle: {
    fontFamily: "Josefin Sans",
    fontWeight: "700",
    maxWidth: "644px",
    fontSize: "53px !important",
    color: "#000000 !important",
    padding: "12px 0px 0px 0px",
  } 
  }));

const BigBannerText = () => {
  const classes = useStyles();
  return (
    <Typography 
      variant="h2" 
      classes={{h2: classes.bigTitle}}    
    >
      New Furniture Collection
      Trends in 2020  
    </Typography>
  )
}

export default BigBannerText;