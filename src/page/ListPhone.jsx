import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import "./ListPhone.css";
import ReviewForm from "../review/RevievForm";


function ListPhone() {
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Reviews
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem(`reviews_${id}`)) || []
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://689ead013fed484cf877ace7.mockapi.io/fruit/${id}`)
      .then((res) => {
        setPhone(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    const user = localStorage.getItem("user");
    if (user) {
      addToCart(phone);
      setAdded(true);
    } else {
      toast.warn("Вы не зарегистрированы");
      navigate("/register");
    }
  };

  const handleBuyNow = () => {
    addToCart(phone);
    navigate("/auther");
  };

  const handleGoBack = () => navigate(-1);

  // Review handlers
  const handleAddReview = (newReview) => {
    const reviewWithId = { ...newReview, id: Date.now() };
    const updatedReviews = [...reviews, reviewWithId];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
  };

  const handleDeleteReview = (reviewId) => {
    const updatedReviews = reviews.filter((r) => r.id !== reviewId);
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));
  };

  if (loading) return <p>Loading...</p>;
  if (!phone) return <p>Phone not found</p>;

  return (
    <div className="phone-page">
      <div className="phone-card-horizontal">
        <div className="phone-img">
          <img src={phone.img} alt={phone.name} />
        </div>
        <div className="phone-info">
          <h3>{phone.name}</h3>
          <p className="price">{phone.price} $</p>

          <div className="specs-grid">
            {Object.entries(phone.specs).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>

          <div className="phone-buttons">
            <button className="buy-now" onClick={handleBuyNow}>
              Купить
            </button>
            <button
              className={`add-cart ${added ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? "Добавлено!" : "Добавить в корзину"}
            </button>
            <button className="go-back" onClick={handleGoBack}>
              Назад
            </button>
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <div className="reviews-section">
        <h3 className="reviews-title">Отзывы</h3>
        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.id} className="review-item">
              <strong>{r.name}</strong>
              <div className="review-rating">⭐ {r.rating}</div>
              <p>{r.comment}</p>
              <small>{r.date}</small>
              <button
                className="delete-review"
                onClick={() => handleDeleteReview(r.id)}
              >
                удалить
              </button>
            </div>
          ))}
        </div>
        <ReviewForm onSubmit={handleAddReview} />
      </div>
    </div>
  );
}

export default ListPhone;
