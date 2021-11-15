import './Home.css';
import React from 'react';
import useAuth from '../../../Hooks/UseAuth';
import Header from '../../Shared/Header/Header';
import { Container } from 'react-bootstrap';
import { Button } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ProductFeatured from './Feaature/ProductFeatured/ProductFeatured'

const Home = () => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <>
                <Header></Header>
                <LinearProgress />
            </>)
    }
    return (
        <div className='hom'>
            <Header></Header>
            <br />
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

            <Container id='featured-tours' className="container top-home">
                <hr />
                <h1>Explore our Collections</h1>
                <hr />
                <ProductFeatured />
                <NavLink to='/explore'><Button sx={{ width: '25%', m: 1 }} variant='contained'>More</Button></NavLink>
            </Container>
        </div>
    );
};

export default Home;