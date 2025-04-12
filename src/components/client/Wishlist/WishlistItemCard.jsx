import React from 'react';

const WishlistItemCard = ({ title, price, img }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2">
      <img src={img} alt={title} className="rounded-md h-32 w-full object-cover mb-2" />
      <div className="font-semibold">{title}</div>
      <div className="text-gray-600">{price}</div>
    </div>
  );
};

export default WishlistItemCard;
