import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";
import './headphones.css';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from "../../context/FavoriteContext";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading';
import { useTranslation } from 'react-i18next';
import QRCode from 'react-qr-code';

function Headphones() {
  const { t } = useTranslation();
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit?category=headphones`)
      .then(res => {
        setProductsData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    );

  const handleFavorite = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowModal(true);
      return;
    }
    const isFav = favoriteItems.some(item => item.id === product.id);
    if (isFav) removeFromFavorite(product.id);
    else addToFavorite(product);
  };

  const handleCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowModal(true);
      return;
    }
    const isInCart = cartItems.some(item => item.id === product.id);
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  };

  const handleRegisterRedirect = () => {
    setShowModal(false);
    navigate("/register");
  };

  return (
    <div className='headphones-logo'>
      <h3
        style={{
          cursor: "pointer",
          paddingLeft: "30px",
          color: "#838383",
          margin: "0 auto"
        }}
      >
        {t('headphones')}
      </h3>

      <div className='headphones'>
        <div className="headphones-all">
          {productsData.map(product => {
            const isInFavorite = favoriteItems.some(item => item.id === product.id);
            const isInCart = cartItems.some(item => item.id === product.id);

            return (
              <div
                className="headphones-blok1"
                key={product.id}
                style={{ display: product.activated ? "block" : "none" }}
              >
                <Link to={`/listphone/${product.id}`} className='blok1'>
                  <div className='blok1-icons'>
                    {isInFavorite ? (
                      <FaHeart
                        className="heart-icon active"
                        onClick={(e) => { e.preventDefault(); handleFavorite(product); }}
                      />
                    ) : (
                      <CiHeart
                        className="heart-icon"
                        onClick={(e) => { e.preventDefault(); handleFavorite(product); }}
                      />
                    )}

                    {isInCart ? (
                      <IoCart
                        className="cart-icon active"
                        onClick={(e) => { e.preventDefault(); handleCart(product); }}
                      />
                    ) : (
                      <IoCartOutline
                        className="cart-icon"
                        onClick={(e) => { e.preventDefault(); handleCart(product); }}
                      />
                    )}
                  </div>

                  <div>
                    <img src={product.img} alt={product.name} />
                  </div>

                  <div className="product-info">
                    <h2>{product.name}</h2>
                    <div className="price-container">
                      <h3>{product.price} $</h3>
                      {product.oldPrice && <h4>{product.oldPrice}</h4>}
                    </div>
                  </div>

                  <div className='air-reiting' style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', color: '#000' }}>
                    <p>⭐ {product.rating}</p>
                    <QRCode
                      value={`PAYMENT?product=${encodeURIComponent(product.name)}&amount=${product.price}`}
                      size={50}
                    />                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {showModal && (
        <div className="headphones-modal-backdrop">
          <div className="headphones-modal">
            <h2 className="headphones-modal-title">{t('attention')}</h2>
            <p className="headphones-modal-text">{t('notRegistered')}</p>
            <div className="headphones-modal-buttons">
              <button className="headphones-register-btn" onClick={handleRegisterRedirect}>
                {t('register')}
              </button>
              <button className="headphones-close-btn" onClick={() => setShowModal(false)}>
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Headphones;
