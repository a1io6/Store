import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './airpots.css';

function AirPots() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
      .then(response => {
        // AirPods үчүн 3 продукт алабыз (мисалы 46-48)
        setProductsData(response.data.slice(46, 49));
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='airpods'>
      <div className="airpods-all">
        {productsData.map(product => (
          <div className="airpods-blok1" key={product.id}>
            <div className='air-blok'>
              <div className='air-icons'>
                <CiHeart className="heart-icon"/>
                <IoCartOutline className="cart-icon"/>
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
        ))}
      </div>
    </div>
  );
}

export default AirPots;
