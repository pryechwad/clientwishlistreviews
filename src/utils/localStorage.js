const REVIEW_KEY = "my_reviews";

export const getSavedReviews = () => {
  const data = localStorage.getItem(REVIEW_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveReview = (newReview) => {
  const existing = getSavedReviews();
  localStorage.setItem(REVIEW_KEY, JSON.stringify([...existing, newReview]));
};
