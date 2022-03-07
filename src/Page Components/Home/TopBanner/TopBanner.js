import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const TopBanner = () => {
    return (
        <Container className='banner'>

            <div className="container">
                <img src="https://cdn.wccftech.com/wp-content/uploads/2019/05/47958761911_ae8c7acff2_k-1480x833.jpg" style={{ borderRadius: '10px' }} width="50%" height="80%" alt="" />
            </div>
            <div>
                <h4 style={{ color: 'red' }}>___ About</h4>
                <h3>The best place to buy <br /> your next builds gpu.</h3>
                <h6>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</h6>
                <br />
                <NavLink to='/about'><Button sx={{ width: '25%', m: 1 }} variant='contained'>Learn More</Button></NavLink>
            </div>
        </Container >
    );
};

export default TopBanner;