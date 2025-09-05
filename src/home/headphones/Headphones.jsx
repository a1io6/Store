// src/page/headphones/Headphones.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './headphones.css';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from "../../context/FavoriteContext"; // ✅ Favorite коштук
import Loading from '../../shared/Loading';

function Headphones() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart, cartItems } = useContext(CartContext);
  const { addToFavorite, favoriteItems } = useContext(FavoriteContext); // ✅ favorite колдонобуз

  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit?category=headphones')
      .then(response => {
        setProductsData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

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
    );

  return (
    <div className='headphones'>
      <div className="headphones-all">
        {productsData.map(product => {
          const isInFavorite = favoriteItems.some(item => item.id === product.id);
          const isInCart = cartItems.some(item => item.id === product.id);

          return (
            <div className="headphones-blok1" key={product.id} style={{
              display: product.activated ? "block" : "none"
            }}>
              <div className='blok1'>
                <div className='blok1-icons'>
                  <CiHeart 
                    className="heart-icon"
                    style={{ color: isInFavorite ? 'red' : 'black' }}
                    onClick={() => addToFavorite(product)}
                  />
                  <IoCartOutline 
                    className="cart-icon"
                    style={{ color: isInCart ? 'green' : 'black' }}
                    onClick={() => addToCart(product)} 
                  />
                </div>
                <img src={product.img} alt={product.name} />
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <div className="price-container">
                    <h3>{product.price} $</h3>
                    {product.oldPrice && <h4>{product.oldPrice}</h4>}
                  </div>
                </div>
                <div className='reiting'>
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

export default Headphones;
