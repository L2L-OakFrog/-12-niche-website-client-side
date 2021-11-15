import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const SingleReview = ({ review }) => {
    const { name, rating, details } = review;
    return (
        <Col xs={12} md={6} lg={4} className='mb-2'>
            <Card>
                {/* <Card.Img variant="top" src={img} /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Card.Text>Ratings:
                        <Rating
                            initialRating={rating}
                            emptySymbol='far fa-star'
                            fullSymbol="fas fa-star"
                            readonly
                        ></Rating></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleReview;