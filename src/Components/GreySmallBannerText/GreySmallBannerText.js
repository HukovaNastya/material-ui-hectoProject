import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    greyTitle: {
      fontFamily: "Lato",
      fontWeight: "700",
      maxWidth: "559px",
      fontSize: "16px !important",
      color: "#8A8FB9 !important",
      padding: "12px 0px 0px 0px",
    } 
    }));

const GreySmallBannerText = () => {
  const classes = useStyles();
  return (
    <Typography 
      variant="h5" 
      classes={{h5: classes.greyTitle}}    
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
      in phasellus non in justo.
    </Typography>
    
  )
}

export default GreySmallBannerText;