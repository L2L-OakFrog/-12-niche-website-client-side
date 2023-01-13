import React from 'react';
import './AddProducts.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmitProducts = data => {
        axios.post('https://one2-niche-website-server-side.onrender.com/explore', data)
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
                <h1>Add Product information's here</h1>
                <hr />
                <form onSubmit={handleSubmit(onSubmitProducts)}>
                    <input placeholder="Name" {...register("name", { required: true })} />
                    <textarea placeholder="Details" {...register("details", { required: true })} />
                    <input placeholder="Cost" type="number" {...register("price", { required: true })} />
                    <input placeholder="Available" type="number" {...register("stock", { required: true })} />
                    <input placeholder="Ratings" type="number" {...register("rating", { min: 1, max: 5 }, { required: true })} />

                    <input placeholder="Image URL" {...register("img", { required: true, /* pattern: "https?://.+" */ })} />
                    {errors?.name && "invalid name"}
                    {errors?.details && "invalid details"}
                    {errors?.cost && "invalid cost"}
                    {errors?.rating && "invalid rating"}
                    {errors?.img && "invalid img"}
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddProducts;