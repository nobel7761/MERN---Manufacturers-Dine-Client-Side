import { useEffect, useState } from "react";

const useLoadAllReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pure-atoll-42866.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return [reviews, setReviews];
}

export default useLoadAllReview;