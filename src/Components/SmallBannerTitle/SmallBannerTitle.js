import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    smallTitle: {
      fontFamily: "Lato",
      fontWeight: "700",
      fontSize: "16px !important",
      color: "#FB2E86 !important"
    } 
  }));

const SmallBannerTitle = () => {
  const classes = useStyles();
  return (
    <Typography 
      variant="h5" 
      classes={{h5: classes.smallTitle}}  
      
    >
      Best Furniture For Your Castle....
    </Typography>
  )
}

export default SmallBannerTitle;