import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import {Link,Redirect,NavLink} from  'react-router-dom' 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    "&.active": {
      background:'black',
    },
  },
  navLink:{
    padding:'10px 15px',
    cursor:'pointer',
  }
}));

export const Nav = ({email}) => {
    const classes = useStyles();
    const history = useHistory();
    function logOut(){
      const data=JSON.parse(localStorage.getItem(email));
      data['isLogged']=false
      localStorage.setItem(email,JSON.stringify(data))
      // history.push('/login');
      history.goBack();
    }

    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {/* <Link to='dashboard/home'> */}


            
            <NavLink className={classes.navLink}  to={'/dashboard/home'} color="inherit">Home</NavLink>
            <NavLink className={classes.navLink}  to={'/dashboard/details'} color="inherit">User Education</NavLink>
            <NavLink className={classes.navLink}  to={'/dashboard/education'} color="inherit">User Details</NavLink>
            <Button className={classes.button} color="inherit" onClick={()=>logOut()}>logOut</Button>
            {/* <a href='/'>LogOut</a> */}
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </div>
    )
}
