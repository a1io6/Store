import React, { useState, useContext } from "react";
import { ReviewContext } from "../context/ReviewContext";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReviewForm() {
  const { addReview } = useContext(ReviewContext);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };
    addReview(newReview);
    setName("");
    setRating(5);
    setComment("");
    toast.success(t("reviews.submitBtn")); // i18n аркылуу текст
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("namePlaceholder")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {/* Эгер рейтинг керек болсо, ачсаң болот */}
      {/* <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {[5, 4, 3, 2, 1].map((n) => (
          <option key={n} value={n}>{n} ⭐</option>
        ))}
      </select> */}
      <textarea
        placeholder={t("commentPlaceholder")}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">{t("submitBtn")}</button>
    </form>
  );
}

export default ReviewForm;
