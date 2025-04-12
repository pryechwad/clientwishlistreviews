import React, { useState } from 'react';
import WishlistItemCard from './WishlistItemCard';
import ReviewForm from '../Review/ReviewForm';
import ReviewCard from '../Review/ReviewCard';

const WishlistPage = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <WishlistItemCard title="Product 1" price="$50"  img="/product1.png" />
        <WishlistItemCard title="Product 2" price="$75" img="/product2.png" />
      </div>

      <ReviewForm onSubmit={handleReviewSubmit} />

      <div>
        <h2 className="text-xl font-semibold text-teal-800 mb-2">My Reviews</h2>
        <div className="space-y-2">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
