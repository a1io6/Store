import React, { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";
import { CartContext } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from './Favorite.module.css';

function Favorite() {
  const { favoriteItems, addToFavorite, removeFromFavorite } = useContext(FavoriteContext);
  const { addToCart } = useContext(CartContext);

  // Тоггл функция
  const toggleFavorite = (product, isFavorite) => {
    if (isFavorite) {
      removeFromFavorite(product.id);
    } else {
      addToFavorite(product);
    }
  };

  return (
    <div className={styles.favContainer}>
      {favoriteItems.length === 0 ? (
        <p>Избранное пустое</p>
      ) : (
        favoriteItems.map((product) => {
          if (!product) return null; // <-- undefined болсо skip кылып койобуз
          
          const isFavorite = favoriteItems.some(item => item.id === product.id);

          return (
            <div className={styles.favItem} key={product.id}>
              <div className={styles.favBox}>
                <div className={styles.favIcons}>
                  <IoCartOutline 
                    onClick={() => addToCart(product)} 
                    className={styles.cartIcon}
                  />
                  {isFavorite ? (
                    <MdFavorite 
                      className={styles.favoriteIconActive}
                      onClick={() => toggleFavorite(product, true)}
                    />
                  ) : (
                    <MdFavoriteBorder 
                      className={styles.favoriteIcon}
                      onClick={() => toggleFavorite(product, false)}
                    />
                  )}
                </div>
                <img src={product.img} alt={product.name} />
                <div className={styles.favInfo}>
                  <h2>{product.name}</h2>
                  <div className={styles.favPrice}>
                    <h3>{product.price} $</h3>
                    {product.oldPrice && <h4>{product.oldPrice}</h4>}
                  </div>
                </div>
                <div className={styles.favRating}>
                  <p>⭐ {product.rating}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Favorite;
