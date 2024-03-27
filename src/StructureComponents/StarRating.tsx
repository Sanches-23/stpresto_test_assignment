import React from "react";
import {Typography} from "@mui/material";

type StarRatingProps = {
    rating: number;
    reviewCount: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    let starRating = "★".repeat(fullStars);
    if (hasHalfStar) {
        starRating += "☆";
    }

    return (
        <Typography variant="body1">
            Stars: {starRating} Reviews: {reviewCount}
        </Typography>
    );
};
export default StarRating;