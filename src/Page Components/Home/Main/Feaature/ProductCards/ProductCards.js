import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ProductCards = ({ product }) => {
    const { name, img, details } = product;
    return (
        <Col xs={12} md={6} lg={4} className='mb-2'>
            <Card className='card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCards;