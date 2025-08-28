// src/page/samsung/Samsung.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './samsung.css'; // Samsung үчүн өзүнчө css
import { CartContext } from '../../context/CartContext'; // туура жол

function Samsung() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Cartка кошуу функциясы

  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
      .then(response => {
        // Samsung моделдерин алабыз, мисалы id 13тен 18ге чейин
        setProductsData(response.data.slice(13, 19));
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  

  if (loading) return <p>Loading...</p>;

  return (
    <div className='samsung'>
      <div className="samsung-all">
        {productsData.map(product => (
          <div className="samsung-blok1" key={product.id}>
            <div className='blok4'>
              <div className='blok4-icons'>
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
                  <h3>{product.price}$</h3>
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

export default Samsung;
