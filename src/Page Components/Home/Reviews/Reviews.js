import React from 'react';
import useReviews from '../../../Hooks/UseReviews';
import { Container, Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';
import sliderReview from './sliderReview';

const Reviews = () => {
    const [reviews] = useReviews();
    const fewReviews = reviews.slice(0, 3);
    return (
        <Container>
            <Row>
                {
                    fewReviews.map(review =>
                        <SingleReview
                            key={review._id}
                            review={review}
                        ></SingleReview>)
                }
            </Row>
            <sliderReview></sliderReview>
        </Container>
    );
};

export default Reviews;