import React, { useEffect, useState } from "react";
import { getSavedReviews } from "../../utils/localStorage";

const MyReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(getSavedReviews());
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">You haven't submitted any reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{r.productName}</h4>
                <p className="text-sm text-gray-400">{new Date(r.timestamp).toLocaleString()}</p>
              </div>
              <p className="text-sm text-gray-500">Vendor: {r.vendor}</p>
              <p className="text-yellow-400 text-lg">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </p>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{r.review}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviewsPage;
