import React, { useState, useContext } from "react";
import { ReviewContext } from "../context/ReviewContext";
import { useTranslation } from "react-i18next";

function ReviewForm() {
  const { addReview } = useContext(ReviewContext);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false); // жаңы стейт
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

    // Поля тазалоо
    setName("");
    setRating(5);
    setComment("");

    // Success билдирүүсүн көрсөтүү
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div>
      {success && <p className="success-msg">{t("reviews.questionSent")}</p>}

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t("namePlaceholder")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder={t("commentPlaceholder")}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">{t("sumbit")}</button>
      </form>
    </div>
  );
}

export default ReviewForm;
