import React from 'react';
import { Box, Modal, Button, Typography } from '@mui/material/';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};

const DetailsModal = ({ openModal, handleCloseDetails, product }) => {
    const { user } = useAuth();
    const userEmail = user?.email;
    const userName = user?.displayName;
    const initialValues = {};
    const { _id, name, details, price, stock } = product;
    const handleAddCart = e => {
        const orders = {
            name: userName,
            email: userEmail,
            productName: name,
            price: price,
        }
        axios.post('https://one2-niche-website-server-side.onrender.com/orders', orders)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    handleCloseDetails();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleCloseDetails}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {details}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <b><u>Available:</u></b> {stock}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <b><u>Price:</u></b> ${price}
                    </Typography>
                    <br />
                    <br />
                    {/* Buttons */}
                    <Button onClick={handleAddCart} sx={{ m: 1 }} variant="contained">Add to Cart</Button>

                    <NavLink to={`/dashboard/purchase/${_id}/`}><Button sx={{ m: 1 }} variant="contained">Buy Now</Button></NavLink>
                </Box>
            </Modal>
        </div>
    );
};

export default DetailsModal;