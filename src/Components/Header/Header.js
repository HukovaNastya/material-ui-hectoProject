import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { makeStyles } from "@material-ui/core";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Drawer from "../Drawer/Drawer";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 0px 0px 0px !important"
  },
  appBar: {
    background: '#F2F0FF !important', 
    boxShadow: 'none !important',
  },
  linkContainer: {
    margin: "0 auto",
  },
  imgLink: {
    maxWidth: "192px",
    // height: '32px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: "144px",
      // height: '24px',
    },

  },
  logoLinkStyle: {
    color: "#0D0E43 !important",
    fontFamily: [
        'Josefin Sans',
        'sans-serif',
       ].join(','),
       fontSize: "34px !important",

  },
  linkStyles: {
    color: "#0D0E43 !important",
    cursor: "pointer",
    fontSize: "16px",
    paddingBottom: "10px",
    '& + &': {
      marginLeft: "35px"
    },
    fontFamily: [
      'Lato',
      'sans-serif',
     ].join(','),
    '&:hover': { borderBottom: '4px solid #FB2E86' }  
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Container maxWidth="lg" className={classes.linkContainer}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" underline="none"  className={classes.logoLinkStyle}>
            Hekto
          </Link>
          {isMobile ? (
            <Drawer />
           ) : (
             <Box >
               <Link  to="/"  underline="none" className={classes.linkStyles}>
                 Home
               </Link>
               <Link to="/"  underline="none" className={classes.linkStyles}>
                 Pages
               </Link>
               <Link to="/"  underline="none" className={classes.linkStyles}>
                 Products
               </Link>
               <Link to="/"  underline="none" className={classes.linkStyles}>
                 Blog 
               </Link>
               <Link to="/"  underline="none" className={classes.linkStyles}>
                 Shop
               </Link>
               <Link to="/"  underline="none" className={classes.linkStyles}>
                 Contact
               </Link>
             </Box>
           )}
        </Toolbar> 
      </Container>   
    </AppBar>
  )
}

export default Header;