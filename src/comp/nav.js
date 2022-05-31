import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import ButtonAppBar from './AppBar';

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
export default function NavBar() {
    const classes = useStyles();
    return (
        <>
        <ButtonAppBar ></ButtonAppBar>
        {/* <nav>
            <Link to='/'>home</Link>{'   '}
            <Link to='/login'>log in</Link>{'    '}
            <Link to='/signup'>sign up</Link>{'    '}
            <Link to='/all_product'>allproduct</Link>{'    '}
            <Link to='/private_area'>private area</Link>{'    '}
            <Link to='/basket'>basket</Link>{'    '}
        </nav> */}
        </>
    )
}