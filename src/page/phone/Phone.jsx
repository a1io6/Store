import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './Phone.css';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router-dom';

function Phone() {
    const {name} = useParams()
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit?category=${name}`)
      .then(response => {
        setProductsData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='iphone'>
      <div className="iphone-all">
        {productsData.map(product => (
          <div className="iphone-blok1" key={product.id}>
            <div className='blok1'>
              <div className='blok1-icons'>
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

export default Phone;
