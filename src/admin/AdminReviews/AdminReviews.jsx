import React, { useContext } from "react";
import { ReviewContext } from "../../context/ReviewContext";
import "./adminreviews.css";

function AdminReviews() {
  const { reviews, deleteReview } = useContext(ReviewContext);

  if (reviews.length === 0)
    return <p className="no-reviews">Пока вопросов нет</p>;

  return (
    <div className="admin-reviews">
      <h1 className="reviews-title">Все вопросы пользователей</h1>

      <div className="reviews-table-wrapper">
        <table className="reviews-table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Вопрос</th>
              <th>Дата</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr key={r.id} className="review-row">
                <td>{r.name}</td>
                <td className="review-comment">{r.comment}</td>
                <td>{r.date}</td>
                <td>
                  <button
                    className="delete-review-btn"
                    onClick={() => deleteReview(r.id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminReviews;
