import { useEffect, useState } from "react";
import axios from 'axios';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://one2-niche-website-server-side.onrender.com/review')
            .then(res => {
                const data = res.data;
                setReviews(data);
            })
    }, [])
    return [reviews, setReviews];
}
export default useReviews;