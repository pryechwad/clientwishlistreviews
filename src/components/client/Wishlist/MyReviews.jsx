// src/pages/MyReviews.jsx
import React from "react";
import { mockReviews } from "../data/mockReviews";
import ReviewCard from "../components/ReviewCard";


const MyReviews = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4 text-[#00796b]">My Reviews</h2>
      {mockReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </DashboardLayout>
  );
};

export default MyReviews;
