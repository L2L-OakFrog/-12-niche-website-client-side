import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/UseAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageUsers = () => {
    const { user } = useAuth();

    const [allOrders, setAllOrders] = useState([]);
    /* useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, []) */
    axios.get(`http://localhost:5000/user`)
        .then(res => {
            const data = res.data;
            setAllOrders(data);
        })
    const deleteHandle = data => {

        const sure = window.confirm('Are you Sure?');
        if (sure) {
            axios.delete(`http://localhost:5000/user/${data}`)
                .then(res => {
                    const data = res.data;
                    if (data.deletedCount > 0) {
                        alert('deleted');
                        const remainingCart = allOrders.filter(order => order._id !== data);
                        setAllOrders(remainingCart);
                    }
                })
        }
    }

    return (
        <div>
            <h1>Manage All Users</h1>
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User Email</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Photo URL</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders.map((row) => (
                            <TableRow
                                key={row._id}

                            >
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.displayName}</TableCell>
                                <TableCell align="right">{row.photoURL}</TableCell>
                                <TableCell align="right">{row.role ? `${row.role}` : 'user'}</TableCell>
                                <TableCell align="right"><button onClick={() => deleteHandle(row._id)} className='ms-2'>X</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageUsers;