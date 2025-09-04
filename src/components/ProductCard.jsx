// src/components/product/ProductCard.jsx
import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addWish, removeWish } from "../../store/auth/Favorite";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product, isFavorite = false }) {
  const dispatch = useDispatch();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="nokia-blok1">
      <div className="blok1">
        <div className="blok1-icons">
          {isFavorite ? (
            <CiHeart
              className="heart-icon"
              onClick={() => dispatch(removeWish(product.id))}
            />
          ) : (
            <CiHeart
              className="heart-icon"
              onClick={() => dispatch(addWish(product))}
            />
          )}
          <IoCartOutline
            className="cart-icon"
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
        <div className="reiting">
          <p>⭐ {product.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
