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

const ManageProducts = () => {
    const { user } = useAuth();

    const [allOrders, setAllOrders] = useState([]);
    /* useEffect(() => {
        fetch(`https://one2-niche-website-server-side.onrender.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, []) */
    axios.get(`https://one2-niche-website-server-side.onrender.com/order`)
        .then(res => {
            const data = res.data;
            setAllOrders(data);
        })
    const deleteHandle = data => {

        const sure = window.confirm('Are you Sure?');
        if (sure) {
            axios.delete(`https://one2-niche-website-server-side.onrender.com/order/${data}`)
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
            <h1>Manage All Orders</h1>
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Shipping to</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders.map((row) => (
                            <TableRow
                                key={row._id}

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
        </div>
    );
};

export default ManageProducts;