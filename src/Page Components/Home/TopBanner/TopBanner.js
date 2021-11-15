import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const TopBanner = () => {
    return (
        <Container className='banner'>
            <div>
                <h1>Welcome To GPU Store!</h1>
                <h5>The best place to buy your next builds gpu.</h5>
                <br />
                <NavLink to='/about'><Button sx={{ width: '75%', m: 1 }} variant='contained'>Learn More</Button></NavLink>
            </div>
            <div className="container">
                <img src="https://cdn.wccftech.com/wp-content/uploads/2019/05/47958761911_ae8c7acff2_k-1480x833.jpg" style={{ borderRadius: '10px' }} width="50%" alt="" />
            </div>
        </Container>
    );
};

export default TopBanner;