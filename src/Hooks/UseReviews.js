import { useEffect, useState } from "react";
import axios from 'axios';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('https://serene-caverns-27431.herokuapp.com/review')
            .then(res => {
                const data = res.data;
                setReviews(data);
            })
    }, [])
    return [reviews, setReviews];
}
export default useReviews;