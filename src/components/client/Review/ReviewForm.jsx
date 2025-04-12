import React, { useState } from "react";
import StarInput from "./StarInput";

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) return;
    onSubmit({ rating, comment });
    setComment("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md space-y-2">
      <h2 className="text-lg font-semibold">Leave a Review</h2>
      <StarInput rating={rating} setRating={setRating} />
      <textarea
        className="w-full border dark:bg-gray-700 dark:border-gray-600 rounded-md p-2"
        rows={2}
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="bg-teal-600 text-white w-full py-2 rounded-md font-semibold hover:bg-teal-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
