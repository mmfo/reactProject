import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentUserId } from '../Redux/actions'
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
export default function Login() {
    const classes = useStyles();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    let user = {}
    let userName
    let userPassword
    function login() {
        user = data?.user?.users?.find(user1 => user1.name == userName && user1.password == userPassword)
        if (user) {
            dispatch(updateCurrentUserId(user.userId))
            if (user.userId == -8)
                navigate('/add_product')
            else
                navigate('/private_area')
        }
        else {
            alert('go to sign up')
            navigate('/signup')
        }
    }
    return (
        <>
            <div className={classes.root}>
                <div className='Login'>
                    <h1> LogIn</h1>
                    <nav>
                        <Link to='/signup'>sign up</Link>{'   '}
                        
                    </nav>
                    <section><br/>
                        <TextField className='TextField' label="Name" variant="outlined" type='text' color="secondary" onChange={(e) => { userName = e.target.value }} />
                        <br />
                        <br />
                        <TextField label="Password" variant="outlined" type='password' color="secondary" onChange={(e) => { userPassword = e.target.value }} />
                        <br />
                        <br />
                        <Button variant="contained" color="secondary" onClick={() => login()}>LogIn</Button>
                    </section>
                </div>
            </div>
        </>
    )
}