import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";
import './airpots.css';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from "../../context/FavoriteContext";
import Loading from '../../shared/Loading';

function Airpots() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    setLoading(true);
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

  if (loading) {
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
  }

  const toggleFavorite = (product) => {
    const isFav = favoriteItems.some(item => item.id === product.id);
    if (isFav) removeFromFavorite(product.id);
    else addToFavorite(product);
  };

  const toggleCart = (product) => {
    const isInCart = cartItems.some(item => item.id === product.id);
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  };

  return (
    <div>


       <h3 
      style={{
        cursor: "pointer",
        width: "1100px",
        color: "#838383",
        marginTop:"40px",
        margin: "0 auto",

      }}
    >
      Беспроводные наушники
    </h3>
   
    <div className="airpods-page">
      <div className="airpods-all">
        {productsData.map(product => {
          const isInFavorite = favoriteItems.some(item => item.id === product.id);
          const isInCart = cartItems.some(item => item.id === product.id);

          return (
            <div className="airpods-blok1" key={product.id} style={{ display: product.activated ? "block" : "none" }}>
              <div className='air-blok'>
                <div className='air-icons'>
                  {isInFavorite ? (
                    <FaHeart
                      className="heart-icon active"
                      onClick={() => toggleFavorite(product)}
                    />
                  ) : (
                    <CiHeart
                      className="heart-icon"
                      onClick={() => toggleFavorite(product)}
                    />
                  )}

                  {isInCart ? (
                    <IoCart
                      className="cart-icon active"
                      onClick={() => toggleCart(product)}
                    />
                  ) : (
                    <IoCartOutline
                      className="cart-icon"
                      onClick={() => toggleCart(product)}
                    />
                  )}
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
    </div> 
  );
}

export default Airpots;
