import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core";
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  FeaturedProductsTitle: {
    margin: "0 auto",
    fontFamily: "Josefin Sans",
    fontWeight: "700",
    maxWidth: "367px",
    fontSize: "42px !important",
    color: "#1A0B5B !important",
    padding: "130px 0px 0px 0px",

  } 
  }));

const FeaturedProductsTitle = () => {
    const classes = useStyles();
    return (
      <Grid container justifyContent="center">
        <Grid item>
          <Typography 
             variant="h3" 
             classes={{h3: classes.FeaturedProductsTitle}}    
          >
             Featured Products
          </Typography>
        </Grid>
      </Grid>
    )
}

export default FeaturedProductsTitle;