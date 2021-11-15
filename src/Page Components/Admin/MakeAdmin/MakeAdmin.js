import { TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState({});
    const { token } = useAuth();

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const role = { email };
        axios.put('http://localhost:5000/user/admin', role, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(res => {
                const data = res.data;
                if (data.modifiedCount > 0) {
                    alert('Successful!');
                    setEmail('');
                }
                else {
                    alert('Failed!');
                    setEmail('');
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make Someone an Admin</h1>
            <hr />
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    required
                    id="standard-required"
                    label="Email"
                    type="email"
                    onBlur={handleChange}
                    variant="standard"
                />
                <Button
                    sx={{ width: '75%', m: 1 }}
                    variant="contained"
                    type="submit"
                >Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;