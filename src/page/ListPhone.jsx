import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
// import ReviewForm from "../../review/RevievForm";
import { QRCodeCanvas } from "qrcode.react";
import { useTranslation } from "react-i18next";
import "./ListPhone.css"; // CSS файлын даярдап коюңуз
import { CartContext } from "../context/CartContext";
import ReviewForm from "../review/RevievForm";
import Loading from "../shared/Loading";

function ListPhone() {
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem(`reviews_${id}`)) || []
  );

  const [showModal, setShowModal] = useState(false); // модалка үчүн

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
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowModal(true); // модалка чыгат
      return;
    }
    addToCart(phone);
    setAdded(true);
    toast.success(t("addedToCart"));
  };

  const handleBuyNow = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowModal(true); // модалка чыгат
      return;
    }
    addToCart(phone);
    navigate("/auther");
  };

  const handleGoBack = () => navigate(-1);

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

  const handleRegisterRedirect = () => {
    setShowModal(false);
    navigate("/register");
  };

if (loading)
    return (
      <div
        style={{
          margin: "100px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    );  if (!phone) return <p>{t("phoneNotFound")}</p>;

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

          <div className="phone-buttons-qr">
            <button className="buy-now" onClick={handleBuyNow}>
              {t("buyNow")}
            </button>
            <button
              className={`add-cart ${added ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? t("added") : t("addToCart")}
            </button>
            <QRCodeCanvas
              value={`https://buy.example.com/product/${phone.id}?price=${phone.price}`}
              size={50}
              bgColor="#ffffff"
              fgColor="#000000"
            />
            <button className="go-back" onClick={handleGoBack}>
              {t("goBack")}
            </button>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h3 className="reviews-title">{t("reviews")}</h3>
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
                {t("delete")}
              </button>
            </div>
          ))}
        </div>
        <ReviewForm onSubmit={handleAddReview} />
      </div>

      {/* Модалка катталуу үчүн */}
     {/* Модалка катталуу үчүн */}
{showModal && (
  <div className="phone-modal-backdrop">
    <div className="phone-modal">
      <h2>{t("attention")}</h2>
      <p>{t("notRegistered")}</p>
      <div className="phone-modal-buttons">
        <button onClick={handleRegisterRedirect}>
          {t("register")}
        </button>
        <button onClick={() => setShowModal(false)}>
          {t("close")}
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default ListPhone;
