// src/page/airpods/AirPots.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './airpots.css';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from "../../context/FavoriteContext"; // ✅ Favorite коштук

function AirPots() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart, cartItems } = useContext(CartContext);
  const { addToFavorite, favoriteItems } = useContext(FavoriteContext); // ✅ context

  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit?category=airpods')
      .then(response => {
        setProductsData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='airpods'>
      <div className="airpods-all">
        {productsData.map(product => {
          const isInFavorite = favoriteItems.some(item => item.id === product.id);
          const isInCart = cartItems.some(item => item.id === product.id);

          return (
            <div className="airpods-blok1" key={product.id}
             style={{
              display: product.activated ? "block" : "none"
            }}>
              <div className='air-blok'>
                <div className='air-icons'>
                  <CiHeart
                    className="heart-icon"
                    style={{ color: isInFavorite ? "red" : "black" }}
                    onClick={() => addToFavorite(product)}
                  />
                  <IoCartOutline
                    className="cart-icon"
                    style={{ color: isInCart ? "green" : "black" }}
                    onClick={() => addToCart(product)}
                  />
                </div>
                <img src={product.img} alt={product.name} />
                <div className="air-info">
                  <h2>{product.name}</h2>
                  <div className="air-price">
                    <h3>{product.price} $</h3>
                    {product.oldPrice && <h4>{product.oldPrice}</h4>}
                  </div>
                </div>
                <div className='air-reiting'>
                  <p>⭐ {product.rating}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AirPots;
