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

const UserCart = () => {
    const { user, token } = useAuth();

    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(res => {
                const data = res.data;
                setCart(data);
            })
    }, [])

    const deleteHandle = data => {

        const sure = window.confirm('Are you Sure?');
        if (sure) {
            axios.delete(`http://localhost:5000/orders/${data}`)
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted');
                        const remainingCart = cart.filter(order => order._id !== data);
                        setCart(remainingCart);
                    }
                })
        }
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Shipping to</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.productName}
                            </TableCell>
                            <TableCell align="right">${row.price}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.status ? `${row.status}` : 'pending'}</TableCell>
                            <TableCell align="right"><button onClick={() => deleteHandle(row._id)} className='ms-2'>X</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserCart;