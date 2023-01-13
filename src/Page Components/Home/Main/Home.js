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
import sliderReview from '../Reviews/sliderReview';

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

            {/* <Container>

                <NavLink to='/explore'><Button sx={{ width: '25%', m: 1 }} variant='contained'>More</Button></NavLink>
            </Container> */}



            <Container>
                <iframe src="https://www.youtube.com/embed/ytcr8id-__M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
            <br />
            <Container>
                <div style={{ color: 'white' }}>
                    <h4 style={{ textAlign: 'center' }}>Testimonials</h4>
                    <hr style={{ width: '25%', marginLeft: '37.5%', marginRight: '37.5%' }} />
                </div>
                <Reviews />
                {/* <sliderReview></sliderReview> */}
            </Container>
            <Container>
                <div>
                    <div>
                        <h4>Latest News</h4>
                    </div>
                    <div>
                        <div>
                            New Graphics Card Releases <br /> This Week!
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;