import React, { useState } from "react";
import StarInput from "../Review/StarInput";

const products = [
 
    {
      id: 1,
      name: "Smartphone",
      price: "₹50000",
      vendor: "Vendor A",
      image: "/public/product1.png",
    },
    {
      id: 2,
      name: "Hand Purse",
      price: "₹350",
      vendor: "Vendor B",
      image: "/public/product2.png",
    },
    {
      id: 3,
      name: "Laptop",
      price: "₹50000",
      vendor: "Vendor C",
      image: "/public/Product3.png",
    },
    {
      id: 4,
      name: "Headphone",
      price: "₹1299",
      vendor: "Vendor A",
      image: "/public/product4.png",
    },
  ];
  


const WishlistPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (!review.trim()) return; // Avoid submitting empty reviews

    setReviews((prev) => [
      ...prev,
      {
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        review,
        rating,
      },
    ]);
    setReview(""); // Clear the review input
    setRating(0); // Reset the rating
  };

  // Filter reviews for the selected product
  const productReviews = reviews.filter((r) => r.productId === selectedProduct?.id);

  // Filter reviews for the "My Reviews" section (all reviews by user)
  const myReviews = reviews;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* All Products or Selected Product View */}
      {!selectedProduct ? (
        <>
          {/* All Products */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition-transform"
              >
                <p className="text-sm text-gray-500">{product.vendor}</p>
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-teal-600 font-medium">{product.price}</p>
              </div>
            ))}
          </div>

          {/* My Reviews */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-teal-700">My Reviews</h2>
            {myReviews.length === 0 ? (
              <p className="text-gray-500">You haven't submitted any reviews yet.</p>
            ) : (
              <div className="space-y-4">
                {myReviews.map((r, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600"
                  >
                    <h4 className="font-semibold">{r.productName}</h4>
                    <p className="text-yellow-400">
                      {"★".repeat(r.rating)}
                      {"☆".repeat(5 - r.rating)}
                    </p>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">{r.review}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Selected Product View */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-4 text-sm text-teal-600 hover:underline"
            >
              ← Back to All Products
            </button>

            <p className="text-sm text-gray-500">{selectedProduct.vendor}</p>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-48 h-48 object-contain mx-auto" />
            <h2 className="text-2xl font-bold text-center mt-2">{selectedProduct.name}</h2>
            <p className="text-center text-teal-700 font-medium mb-4">{selectedProduct.price}</p>

            {/* Display reviews for this product */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Reviews for {selectedProduct.name}</h4>
              {productReviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet for this product.</p>
              ) : (
                <div className="space-y-4">
                  {productReviews.map((r, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600"
                    >
                      <h4 className="font-semibold">{r.productName}</h4>
                      <p className="text-yellow-400">
                        {"★".repeat(r.rating)}
                        {"☆".repeat(5 - r.rating)}
                      </p>
                      <p className="mt-1 text-gray-700 dark:text-gray-300">{r.review}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Leave a Review */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Leave a Review</h4>
              <StarInput rating={rating} setRating={setRating} />
              <textarea
                placeholder="Write your review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full mt-2 p-2 rounded-md border border-gray-300 dark:border-gray-600"
                rows={4}
              />
              <button
                onClick={handleReviewSubmit}
                className="mt-2 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;
