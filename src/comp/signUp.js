import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addUser, deleteUser } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function SignUp() {
    const data = useSelector(state => state)
    const manager = data?.user?.users?.find(user => user.userId == -8)
    const currentUserId = data?.user?.currentUserId[0]
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let user = {}
    function SignUp() {
        let maxUserId = 0
        data?.user?.users?.forEach(user => {
            if (user.userId > maxUserId)
                maxUserId = user.userId
        });
        user.userId = maxUserId + 1
        if (data?.user?.users?.find(user1 => user1.name == user.name && user1.password == user.password)) {
            alert(`the user${user.name} already exist`)
            navigate('/login')
        }
        dispatch(addUser(user))
        navigate('/all_product')
    }
    return (
        <>
            <h1>SignUp</h1>
            <nav>
                <Link to='/login'>log in</Link>{'   '}
            </nav>
            <section><br/>
                <TextField label="Name" variant="outlined" type='text' color="secondary" onChange={(e) => { user.name = e.target.value }} />
                <br />
                <br />
                <TextField label="Password" variant="outlined" type='password' color="secondary" onChange={(e) => { user.id = e.target.value }} />
                <br />
                <br />
                <Button variant="contained" color="secondary" onClick={() => SignUp()}>SignUp</Button>

            </section>

            {manager.userId == currentUserId &&
                <section>
                    <h1>All Users</h1>
                    {data?.user?.users?.map((item, key) => (
                        <div key={key}>
                            {item.name}{'   '}
                            {item.userId}
                            <button onClick={() => dispatch(deleteUser(key))}>delete user</button>
                        </div>
                    ))}
                </section>}
        </>

    )
}