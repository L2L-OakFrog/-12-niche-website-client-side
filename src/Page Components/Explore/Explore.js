import React from 'react';
import Header from '../Shared/Header/Header';
import { Container, Grid } from '@mui/material';
import SingleProduct from './SingleProduct/SingleProduct';
import useProducts from '../../Hooks/UseProducts';

const Explore = () => {
    const [products] = useProducts();
    return (
        <div>
            <Header></Header>
            <br />
            <br />
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map(product =>
                            <SingleProduct
                                key={product._id}
                                product={product}
                            ></SingleProduct>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Explore;