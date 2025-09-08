import React, { createContext, useState, useEffect } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("allReviews");
    if (stored) setReviews(JSON.parse(stored));
  }, []);

  const saveToStorage = (newReviews) => {
    setReviews(newReviews);
    localStorage.setItem("allReviews", JSON.stringify(newReviews));
  };

  const addReview = (review) => {
    const newReviews = [review, ...reviews];
    saveToStorage(newReviews); // state жана localStorage жаңыланат
  };

  const deleteReview = (id) => {
    const newReviews = reviews.filter((r) => r.id !== id);
    saveToStorage(newReviews);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
