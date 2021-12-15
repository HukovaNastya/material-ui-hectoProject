import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core";
import Container from '@mui/material/Container';
import SmallBannerTitle from '../../Components/SmallBannerTitle/SmallBannerTitle';
import Grid from '@mui/material/Grid';
import BigBannerText from '../../Components/BigBannerText/BigBannerText';
import GreySmallBannerText from '../GreySmallBannerText/GreySmallBannerText';
import BannerBatton from '../../Components/BannerButton/BannerButton';

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    width: "100%",
    backgroundColor: "#F2F0FF",
    padding:  "100px 0px 103px 0px",
  },
  bannerContainer: {
    margin: "0 auto !important",
  },
  bannerImg: {
   maxWidth: "500px",
   minHeight: "500px"
  }   
}));

const Banner = () => {
  const classes = useStyles();
  return(
    <Box className={classes.bannerBox}>
      <Container maxWidth="lg" className={classes.bannerContainer}>
        <Grid container justifyContent="space-between">
          <Grid item>
             <SmallBannerTitle/>
             <BigBannerText/>
             <GreySmallBannerText/>
             <BannerBatton/>
          </Grid>
          <Grid item>
            <img className={classes.bannerImg} src="/img/chair.png"></img>  
          </Grid>
       </Grid>
      </Container>
    </Box>
  )
}

export default Banner;