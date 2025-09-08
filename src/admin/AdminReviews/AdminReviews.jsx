import React, { useContext } from "react";
import { ReviewContext } from "../../context/ReviewContext";
import "./AdminReviews.css";

function AdminReviews() {
  const { reviews, deleteReview } = useContext(ReviewContext);

  if (reviews.length === 0) return <p className="no-reviews">Пока отзывов нет</p>;

  return (
    <div className="admin-reviews">
      <h1 className="reviews-title">Все вопросы пользователей</h1>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Комментарий</th>
            <th>Рейтинг</th>
            <th>Дата</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.id} className="review-row">
              <td>{r.name}</td>
              <td>{r.comment}</td>
              <td>{r.rating}⭐</td>
              <td>{r.date}</td>
              <td>
                <button className="delete-review-btn" onClick={() => deleteReview(r.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminReviews;
