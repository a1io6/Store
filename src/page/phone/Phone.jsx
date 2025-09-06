import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";
import './Phone.css';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from "../../context/FavoriteContext";
import { useParams, Link } from 'react-router-dom';
import Loading from '../../shared/Loading';

function Phone() {
  const { name } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit?category=${name}`)
      .then(res => {
        setProductsData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [name]);

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

  const handleFavorite = (product) => {
    const isFav = favoriteItems.some(item => item.id === product.id);
    if (isFav) removeFromFavorite(product.id);
    else addToFavorite(product);
  };

  const handleCart = (product) => {
    const isInCart = cartItems.some(item => item.id === product.id);
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  };

  return (
    <div className='iphone'>
      <div className="iphone-all">
        {productsData.map(product => {
          const isInFavorite = favoriteItems.some(item => item.id === product.id);
          const isInCart = cartItems.some(item => item.id === product.id);

          return (
            <div
              className="iphone-blok1"
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

                <div className='reiting'>
                  <p>⭐ {product.rating}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Phone;
