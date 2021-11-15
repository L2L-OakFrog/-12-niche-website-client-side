import React from 'react';
import useProducts from '../../../../../Hooks/UseProducts';
import { Container, Row } from 'react-bootstrap';
import ProductCards from '../ProductCards/ProductCards';

const ProductFeatured = () => {
    const [products] = useProducts();
    const fewProducts = products.slice(0, 6);
    return (
        <Container>
            <Row>
                {
                    fewProducts.map(product =>
                        <ProductCards
                            key={product._id}
                            product={product}
                        ></ProductCards>)
                }
            </Row>
        </Container>
    );
};

export default ProductFeatured;