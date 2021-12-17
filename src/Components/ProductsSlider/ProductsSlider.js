import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  sliderCard: {
    background: "#fff !important",
    marginLeft: "10px",
    marginRight: "10px"
  },
  sliderCardBox: {
    background: "#F6F7FB !important",
    padding: "10px 10px",
    height: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  smallTitleCardBox: {
    fontFamily: "Lato",
    fontWeight: "300",
    textAlign: 'center !important',
    fontSize: "18px !important",
    color: "#FB2E86 !important",
    padding: "15px 0px 0px 0px",
  },
  codelTitleCardBox: {
    fontFamily: "Josefin Sans",
    fontWeight: "300",
    textAlign: 'center !important',
    fontSize: "18px !important",
    color: "#151875 !important",
    padding: "14px 0px 0px 0px",
  },
  pricelTitleCardBox: {
    fontFamily: "lato",
    fontWeight: "300",
    textAlign: 'center !important',
    fontSize: "14px !important",
    color: "#151875 !important",
    padding: "14px 0px 17px 0px",
  }
}));
  

const ProductsSlider = () => {
  const classes = useStyles();
  let settings = {
    infinite: true,
	  dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Card className={classes.sliderCard}>
            <Box className={classes.sliderCardBox}>
              <img src="/img/whiteChair.png"  alt="img"/>
            </Box>
            <Box className={classes.bottomCardBox}>
              <Typography 
                variant="h6" 
                classes={{h6: classes.smallTitleCardBox}}    
              >
                Cantilever chair
              </Typography>
              <Typography 
                variant="h6" 
                classes={{h6: classes.codelTitleCardBox}}    
              >
                Code - Y523201
              </Typography>
              <Typography 
                variant="h6" 
                classes={{h6: classes.pricelTitleCardBox}}    
              >
                $42.00
              </Typography>
           </Box>
          </Card>
        </div>
        <div>
          <Card className={classes.sliderCard}>
            <Box className={classes.sliderCardBox}>
              <img src="/img/chair2.png" alt="img"/>
            </Box>
            <Box className={classes.bottomCardBox}>
              <Typography 
                variant="h6" 
                classes={{h6: classes.smallTitleCardBox}}    
              >
                Cantilever chair
              </Typography>
              <Typography 
                variant="h6" 
                classes={{h6: classes.codelTitleCardBox}}    
              >
                Code - Y523201
              </Typography>
              <Typography 
                variant="h6" 
                classes={{h6: classes.pricelTitleCardBox}}    
              >
                $42.00
              </Typography>
            </Box>
          </Card>
        </div>
        <div>
        <Card className={classes.sliderCard}>
          <Box className={classes.sliderCardBox}>
            <img src="/img/chair3.png" alt="img"/>
          </Box>
          <Box className={classes.bottomCardBox}>
            <Typography 
              variant="h6" 
              classes={{h6: classes.smallTitleCardBox}}    
            >
              Cantilever chair
            </Typography>
            <Typography 
              variant="h6" 
              classes={{h6: classes.codelTitleCardBox}}    
            >
              Code - Y523201
            </Typography>
            <Typography 
              variant="h6" 
              classes={{h6: classes.pricelTitleCardBox}}    
            >
              $42.00
            </Typography>
          </Box>
        </Card>
        </div>
        <div>
        <Card className={classes.sliderCard}>
          <Box className={classes.sliderCardBox}>
            <img src="/img/whiteChair.png" alt="img"/>
          </Box>
          <Box className={classes.bottomCardBox}>
            <Typography 
              variant="h6" 
              classes={{h6: classes.smallTitleCardBox}}    
            >
              Cantilever chair
            </Typography>
            <Typography 
              variant="h6" 
              classes={{h6: classes.codelTitleCardBox}}    
            >
              Code - Y523201
            </Typography>
            <Typography 
              variant="h6" 
              classes={{h6: classes.pricelTitleCardBox}}    
            >
              $42.00
            </Typography>
          </Box>
          </Card>
          </div>
          <div>
            <Card className={classes.sliderCard}>
              <Box className={classes.sliderCardBox}>
                <img src="/img/whiteChair.png" alt="img"/>
              </Box>
              <Box className={classes.bottomCardBox}>
                <Typography 
                   variant="h6" 
                   classes={{h6: classes.smallTitleCardBox}}    
                >
                   Cantilever chair
                </Typography>
                <Typography 
                  variant="h6" 
                  classes={{h6: classes.codelTitleCardBox}}    
                >
                  Code - Y523201
                </Typography>
                <Typography 
                  variant="h6" 
                  classes={{h6: classes.pricelTitleCardBox}}    
                >
                  $42.00
                </Typography>
              </Box>
            </Card>
          </div>
          <div>
            <Card className={classes.sliderCard}>
              <Box className={classes.sliderCardBox}>
                <img src="/img/whiteChair.png"  alt="img"/>
              </Box>
              <Box className={classes.bottomCardBox}>
                <Typography 
                  variant="h6" 
                  classes={{h6: classes.smallTitleCardBox}}    
                >
                  Cantilever chair
                </Typography>
                <Typography 
                  variant="h6" 
                  classes={{h6: classes.codelTitleCardBox}}    
                >
                  Code - Y523201
                </Typography>
                <Typography 
                  variant="h6" 
                  classes={{h6: classes.pricelTitleCardBox}}    
                >
                  $42.00
               </Typography>
              </Box>
            </Card>
          </div>
      </Slider>

    </div>
  )
}

export default ProductsSlider;