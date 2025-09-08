import React, { useState, useEffect } from "react";
import "./AllReviews.css";
import ReviewForm from "./RevievForm";

function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("all_reviews")) || [];
    setReviews(stored);
  }, []);

  const handleAddReview = (review) => {
    const newReview = { ...review, id: Date.now() };
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem("all_reviews", JSON.stringify(updated));
  };

  const handleDeleteReview = (id) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    localStorage.setItem("all_reviews", JSON.stringify(updated));
  };

  return (
    <div className="all-reviews-page">
      <h2>Вопросы пользователей</h2>

      {reviews.length === 0 ? (
        <p>Пока вопросов нет</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.id} className="review-item">
              <strong>{r.name}</strong>
              <div className="review-rating">⭐ {r.rating}</div>
              <p>{r.comment}</p>
              <small>{r.date}</small>
              <button className="delete-review" onClick={() => handleDeleteReview(r.id)}>Удалить</button>
            </div>
          ))}
        </div>
      )}

      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
}

export default AllReviews;
