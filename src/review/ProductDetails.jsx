// ReviewForm.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function ReviewForm({ onSubmit }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, rating, comment });
    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("reviews.namePlaceholder")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
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
  );
}

export default ReviewForm;
