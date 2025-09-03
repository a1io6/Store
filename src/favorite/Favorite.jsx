import React, { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

function Favorite() {
  const { favorites, removeFromFavorite } = useContext(FavoriteContext);

  if (favorites.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Избранных товаров нет </h2>;
  }

  return (
    <div className="favorite">
      <h2>Избранное</h2>
      <div className="favorite-list">
        {favorites.map(item => (
          <div key={item.id} className="favorite-item">
            <img src={item.img} alt={item.name} width={100} />
            <h3>{item.name}</h3>
            <p>{item.price}$</p>
            <button onClick={() => removeFromFavorite(item.id)}>Убрать</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
