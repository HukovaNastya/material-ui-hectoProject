import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  battonWrapper: {
    width: "163px",
    paddingTop: "43px"
  },
  bannerButton: {
    backgroundColor: "#FB2E86 !important",
    width: '100%',
    color: "#fff !important",
    fontFamily: "Josefin Sans !important",
    fontSize: "17px !important"
  }
}))


const BannerBatton = () => {
  const classes = useStyles();
  return (
    <div className={classes.battonWrapper}>
      <Button href="#text-buttons" className={classes.bannerButton}>Shop Now</Button>
    </div>
  )
}

export default BannerBatton;