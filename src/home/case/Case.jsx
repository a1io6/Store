import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './case.css';
import Loading from '../../shared/Loading';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from "../../context/FavoriteContext"; 
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Case() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false); // модалка

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit?category=case`)
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
      <div style={{ margin: "100px auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </div>
    );

  const toggleFavorite = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowModal(true);
      return;
    }
    const isFav = favoriteItems.some(item => item.id === product.id);
    if (isFav) removeFromFavorite(product.id);
    else addToFavorite(product);
  };

  const toggleCart = (product) => {
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
    window.location.href = "/register"; // navigate жок болсо window.location
  };

  return (
    <div className='case-logo'>
      <h3 
        style={{ cursor: "pointer", width: "1100px", color: "#838383", marginTop:"40px", margin: "0 auto" }} 
        onClick={() => setShowAll(!showAll)}
      >
        Чехлы {showAll ? "▲" : "▼"}
      </h3>

      <div className='case'>
        <div className={`case-all ${showAll ? "expanded" : "collapsed"}`}>
          {productsData.map(product => {
            const isInFavorite = favoriteItems.some(item => item.id === product.id);
            const isInCart = cartItems.some(item => item.id === product.id);

            return (
              <div className="case-blok1" key={product.id} style={{ display: product.activated ? "block" : "none" }}>
                <div className='case-item'>
                  <div className='case-icons'>
                    <CiHeart 
                      className="heart-icon" 
                      style={{ color: isInFavorite ? "red" : "black" }}
                      onClick={() => toggleFavorite(product)} 
                    />
                    <IoCartOutline 
                      className="cart-icon" 
                      style={{ color: isInCart ? "green" : "black" }}
                      onClick={() => toggleCart(product)} 
                    />
                  </div>
                  <img src={product.img} alt={product.name} />
                  <div className="case-info">
                    <h2>{product.name}</h2>
                    <div className="price-container">
                      <h3>{product.price} $</h3>
                      {product.oldPrice && <h4>{product.oldPrice}</h4>}
                    </div>
                  </div>
                  <div className='case-rating'>
                    <p>⭐ {product.rating}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Модалка */}
      {showModal && (
        <div className="case-modal-backdrop">
          <div className="case-modal">
            <h2 className="case-modal-title">Внимание!</h2>
            <p className="case-modal-text">
              Вы не можете добавить товар в корзину или избранное, потому что не зарегистрированы.
            </p>
            <div className="case-modal-buttons">
              <button className="case-register-btn" onClick={handleRegisterRedirect}>
                Регистрация
              </button>
              <button className="case-close-btn" onClick={() => setShowModal(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Case;
