import React from "react";

const StarInput = ({ rating, setRating }) => {
  return (
    <div className="flex space-x-1 text-xl">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          className={`transition-all ${num <= rating ? "text-yellow-400" : "text-gray-300"} hover:scale-110`}
          onClick={() => setRating(num)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default StarInput;
