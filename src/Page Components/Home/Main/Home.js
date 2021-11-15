import './Home.css';
import React from 'react';
import useAuth from '../../../Hooks/UseAuth';
import Header from '../../Shared/Header/Header';
import { LinearProgress } from '@mui/material';
import ProductFeatured from './Feaature/ProductFeatured/ProductFeatured'
import TopBanner from '../TopBanner/TopBanner';
import { Container } from 'react-bootstrap';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

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

            <TopBanner />

            <Container>
                <hr />
                <h1>Explore our Collections</h1>
                <hr />
                <ProductFeatured />
                <NavLink to='/explore'><Button sx={{ width: '25%', m: 1 }} variant='contained'>More</Button></NavLink>
            </Container>

            <Container>
                <hr />
                <h1>Our Customers </h1>
                <hr />
                <Reviews />
            </Container>

            <Container>
                <hr />
                <h1>To Help You Choose</h1>
                <hr />
                <iframe src="https://www.youtube.com/embed/ytcr8id-__M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
            <br />
        </div>
    );
};

export default Home;