// src/page/sony/Sony.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './sony.css'; // Sony үчүн стили
import { CartContext } from '../../context/CartContext'; // туура жол

function Sony() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Cartка кошуу функциясы

  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
      .then(response => {
        // Sony моделдерин алабыз (мисалы id 19-24)
        setProductsData(response.data.slice(19, 25));
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='sony'>
      <div className="sony-all">
        {productsData.map(product => (
          <div className="sony-blok1" key={product.id}>
            <div className='blok5'>
              <div className='blok5-icons'>
                <CiHeart className="heart-icon"/>
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
        ))}
      </div>
    </div>
  );
}

export default Sony;
