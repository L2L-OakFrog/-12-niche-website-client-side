import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Button } from '@mui/material';
import DetailsModal from '../DetailsModal/DetailsModal';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
    const { name, img, details, rating } = product;

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenDetails = () => setOpenModal(true);
    const handleCloseDetails = () => setOpenModal(false)
    return (
        <>
            <Col xs={12} md={6} lg={4} className='mb-3'>
                <Card className='explore'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <hr />
                        <Card.Text>{details}</Card.Text>
                        <Card.Text>Ratings:
                            <Rating
                                initialRating={rating}
                                emptySymbol='far fa-star'
                                fullSymbol="fas fa-star"
                                readonly
                            ></Rating></Card.Text>
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            onClick={handleOpenDetails}
                        >Details</Button>
                    </Card.Body>
                </Card>
            </Col>
            <DetailsModal
                product={product}
                openModal={openModal}
                handleCloseDetails={handleCloseDetails}
            ></DetailsModal>
        </>
    );
};

export default SingleProduct;