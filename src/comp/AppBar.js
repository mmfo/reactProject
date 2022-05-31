import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useNavigate } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';


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
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const navigate = useNavigate()
  const menuId = 'primary-search-account-menu';
  return (
    <div className={classes.root} >
      <AppBar position="static"  color="pink">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />            
          <Button color="inherit" onClick={() =>navigate('/') }>home</Button>
          <Button color="inherit" onClick={() =>navigate('/all_product') }>PRODUCT</Button>
          </IconButton>
          {'     '}{'   '}
          <Button color="inherit" onClick={() =>navigate('/basket')} >basket</Button>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" onClick={() =>navigate('/login') }>Login</Button>
          <Button color="inherit" onClick={() =>navigate('/signup') }>SIGNUP</Button>
          {/*  */}
          <IconButton
            onClick={()=>navigate('/private_area')}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
