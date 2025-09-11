import React, { useContext, useState } from "react";
import { ReviewContext } from "../../context/ReviewContext";
import { useTranslation } from "react-i18next"; // i18n.js колдонуп жатабыз
import "./Reviews.css";

function Reviews({ productId }) {
  const { reviews, addReview } = useContext(ReviewContext);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const { t } = useTranslation(); // i18n колдонуу

  const productReviews = reviews.filter((r) => r.productId === productId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      productId,
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };
    addReview(newReview);
    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <div className="reviews-section">
      <h3 className="reviews-title">{t("reviews.title")}</h3>

      <div className="reviews-grid">
        {productReviews.map((r) => (
          <div key={r.id} className="review-item">
            <strong>{r.name}</strong>
            <div className="review-rating">⭐ {r.rating}</div>
            <p>{r.comment}</p>
            <small>{r.date}</small>
          </div>
        ))}
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t("reviews.namePlaceholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} ⭐</option>)}
        </select>
        <textarea
          placeholder={t("reviews.commentPlaceholder")}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">{t("reviews.submitBtn")}</button>
      </form>
    </div>
  );
}

export default Reviews;
