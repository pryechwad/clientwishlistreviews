import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-md p-3 shadow">
      <div className="font-semibold mb-1">⭐ {review.rating} - {review.comment}</div>
    </div>
  );
};

export default ReviewCard;
