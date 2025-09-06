import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
import { FavoriteContext } from "../../context/FavoriteContext";
import { Link } from "react-router-dom";
import Loading from "../../shared/Loading";
import "./Catalog.css"; // новый CSS

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { favoriteItems, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://689ead013fed484cf877ace7.mockapi.io/fruit")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleFavorite = (product) => {
    const isFav = favoriteItems.some((item) => item.id === product.id);
    if (isFav) removeFromFavorite(product.id);
    else addToFavorite(product);
  };

  const handleCart = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  };

  if (loading)
    return (
      <div className="catalog-loading">
        <Loading />
      </div>
    );

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Все товары</h2>
      <div className="catalog-grid">
        {products.map((product) => {
          const isInFavorite = favoriteItems.some(
            (item) => item.id === product.id
          );
          const isInCart = cartItems.some((item) => item.id === product.id);

          return (
            <div className="catalog-card" key={product.id}>
              <Link to={`/listphone/${product.id}`} className="catalog-link">
                <div className="catalog-icons">
                  {isInFavorite ? (
                    <FaHeart
                      className="catalog-heart active"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFavorite(product);
                      }}
                    />
                  ) : (
                    <CiHeart
                      className="catalog-heart"
                      onClick={(e) => {
                        e.preventDefault();
                        handleFavorite(product);
                      }}
                    />
                  )}

                  {isInCart ? (
                    <IoCart
                      className="catalog-cart active"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCart(product);
                      }}
                    />
                  ) : (
                    <IoCartOutline
                      className="catalog-cart"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCart(product);
                      }}
                    />
                  )}
                </div>

                <div className="catalog-image">
                  <img src={product.img} alt={product.name} />
                </div>

                <div className="catalog-info">
                  <h3>{product.name}</h3>
                  <div className="catalog-price">
                    <span className="current-price">{product.price} $</span>
                    {product.oldPrice && (
                      <span className="old-price">{product.oldPrice} $</span>
                    )}
                  </div>
                  <div className="catalog-rating">⭐ {product.rating}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;
