import React, { useState, useContext } from "react";
import { ReviewContext } from "../context/ReviewContext";

function ReviewForm() {
  const { addReview } = useContext(ReviewContext);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

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
    alert("Вопрос успешно отправлен!");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {/* <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[5, 4, 3, 2, 1].map((n) => (
          <option key={n} value={n}>{n} ⭐</option>
        ))}
      </select> */}
      <textarea
        placeholder="Ваш вопрос"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">вопросы</button>
    </form>
  );
}

export default ReviewForm;
