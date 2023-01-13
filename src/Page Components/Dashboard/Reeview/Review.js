import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/UseAuth';

const Review = () => {
    const { user } = useAuth();
    const preloaded = {
        name: `${user.displayName}`,
    }
    const { register, formState: { errors }, reset, handleSubmit } = useForm({
        defaultValues: preloaded
    });

    const onSubmitReviews = data => {
        axios.post('https://one2-niche-website-server-side.onrender.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!');
                    reset();
                }
            })
    }

    return (
        <>
            <div className="adding">
                <h1>Add Your Reviews here</h1>
                <hr />
                <form onSubmit={handleSubmit(onSubmitReviews)}>
                    <input placeholder='Your Name' {...register("name", { required: true })} />
                    <textarea placeholder="Details" {...register("details", { required: true })} />
                    <input placeholder="Ratings 1-5" type="number" {...register("rating", { min: 1, max: 5 }, { required: true })} />

                    {errors?.name && "invalid name"}
                    {errors?.details && "invalid details"}
                    {errors?.rating && "invalid rating"}
                    {errors?.img && "invalid img"}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default Review;