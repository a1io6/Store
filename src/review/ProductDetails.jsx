import React, { useState } from "react";
import ReviewForm from "../review/ReviewForm";

function ProductDetails({ product }) {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <p>Цена: {product.price} $</p>

      <h3>Вопросы:</h3>
      {reviews.length === 0 ? (
        <p>Пока вопросов нет</p>
      ) : (
        reviews.map((r) => (
          <div key={r.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
            <strong>{r.name}</strong> — {r.rating}⭐
            <p>{r.comment}</p>
            <small>{r.date}</small>
          </div>
        ))
      )}

      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
}

export default ProductDetails;
