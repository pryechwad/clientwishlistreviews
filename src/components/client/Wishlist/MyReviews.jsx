import React from "react";
import MyReviews from "../components/MyReviews";

const UserDashboard = () => {
  // Example reviews data (replace with actual data from your backend or state)
  const reviews = [
    { id: 1, productName: "Product 1", rating: 5, comment: "Great product!" },
    { id: 2, productName: "Product 2", rating: 4, comment: "Good value for money." },
  ];

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <MyReviews reviews={reviews} />
    </div>
  );
};

export default UserDashboard;