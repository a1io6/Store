import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './headphones.css';
import { CiHeart } from "react-icons/ci";
import nnnn from '../../assets/nnnn.png';

function Headphones() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
      .then(response => {
        // Берём только первые 6 продуктов
        setProductsData(response.data.slice(37, 43));
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div className='headphones'>
      <div className="headphones-all">
        {productsData.map(product => (
          <div className="headphones-blok1" key={product.id}>
            <div className='blok1'>
              <div className='blok1-icon'>
                <CiHeart />
              </div> 
              <img src={product.img} alt={product.name} />
              <div className="product-info">
               <div><h2>{product.name}</h2> </div> 
                <div className="price-container">
                  <h3>{product.price} $</h3> 
                  {<h4>{product.oldPrice} $</h4>}
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

export default Headphones;
