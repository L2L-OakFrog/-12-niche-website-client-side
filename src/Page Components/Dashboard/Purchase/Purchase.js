import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { pId } = useParams();
    const { register, reset, handleSubmit } = useForm();
    const [ids, setIds] = useState({});
    useEffect(() => {
        axios.get(`https://one2-niche-website-server-side.onrender.com/explore/${pId}`)
            .then(res => {
                const data = res.data;
                console.log(data);
                setIds(data);
            });
    }, [])

    const onSubmitPurchase = data => {
        axios.post('https://one2-niche-website-server-side.onrender.com/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    reset();
                }
            })
    }
    return (
        <div className='container' style={{ backgroundColor: 'whitesmoke' }}>
            <h1>Showing Details of: {ids?.name}</h1>
            <hr />
            <Container className='flexing'>
                <div>
                    <h1>Name: {ids?.name}</h1>
                    <br />
                    <p>{ids?.details}</p>
                    <h5>Ratings: <Rating
                        initialRating={ids?.rating}
                        emptySymbol='far fa-star'
                        fullSymbol="fas fa-star"
                        readonly></Rating>
                    </h5>
                    <br />
                    <h5>Price: {ids?.price}$</h5>
                    <br />
                    <br />
                </div>
                <div className="container">
                    <img src={ids.img} width="70%" alt="" />
                </div>
            </Container>
            <div className='adding'>
                <hr />
                <h1>Add Required information's</h1>
                <hr />
                <form onSubmit={handleSubmit(onSubmitPurchase)}>
                    <input placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true })} />
                    <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="Bookings" defaultValue={ids?.name} {...register("productName", { required: true })} />
                    <input readOnly placeholder="Price" defaultValue={ids?.price} {...register("price", { required: true })} />
                    <input placeholder="Quantity" {...register("quantity", { required: true })} />
                    <input placeholder="Location" {...register("location", { required: true })} />
                    <input type="submit" value="Buy Now" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;