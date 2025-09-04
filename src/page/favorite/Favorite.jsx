import React, { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { CartContext } from "../../context/CartContext";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Favorite() {
  const { favoriteItems, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="wish-flex">
      {favoriteItems.length === 0 ? (
        <p>Избранное пустое</p>
      ) : (
        favoriteItems.map((product) => (
          <div className="iphone-blok1" key={product.id}>
            <div className='blok1'>
              <div className='blok1-icons'>
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
              <div className='reiting'>
                <p>⭐ {product.rating}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorite;
