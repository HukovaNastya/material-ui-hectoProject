import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
  drawer: {
    backgroundColor: "#F2F0FF",
    width: '375px',
    height: "100vh",
    padding: '20px 20px',  
  },
  linkStyle:{
    textDecoration: "none",
    color: "#0D0E43",
    fontSize: "24px",
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
  },
  icon:{
    color: "#0D0E43",
    padding: '0px'
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
         <List className={classes.drawer}>
           <ListItem onClick={() => setOpenDrawer(false)}>
             <ListItemText>
               <Link to="/"   className={classes.linkStyle}>
                 Hekto
               </Link>
            </ListItemText>
            </ListItem>
            <Divider/>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/"   className={classes.linkStyle}>
                    Home
                  </Link>
                </ListItemText>
              </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/"   className={classes.linkStyle}>
                  Pages
                </Link>
              </ListItemText>
            </ListItem>
            <Divider/>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/"   className={classes.linkStyle}>
                    Products
                  </Link>
                </ListItemText>
              </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/"   className={classes.linkStyle}>
                  Blog
                </Link>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/"   className={classes.linkStyle}>
                  Shop
                </Link>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/"   className={classes.linkStyle}>
                  Contact
                </Link>
              </ListItemText>
            </ListItem>
            <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
   </>
  );
}
export default DrawerComponent;