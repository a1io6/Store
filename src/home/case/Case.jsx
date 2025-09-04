import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './case.css';
import Loading from '../../shared/Loading';
import { CartContext } from '../../context/CartContext';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Case() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit?category=case`)
      .then(response => {
        setProductsData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div
        style={{
          margin: "100px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    );

  return (
    <div className='case-logo'>
      <h3 
        style={{
           cursor: "pointer",
         }}
        onClick={() => setShowAll(!showAll)}
      >
        Чехлы {showAll ? "▲" : "▼"}
      </h3>

      <div className='case'>
        <div className={`case-all ${showAll ? "expanded" : "collapsed"}`}>
          {productsData.map(product => (
            <div className="case-blok1" key={product.id}>
              <div className='case-item'>
                <div className='case-icons'>
                  <CiHeart className="heart-icon" />
                  <IoCartOutline 
                    className="cart-icon" 
                    onClick={() => addToCart(product)} 
                  />
                </div>
                <img src={product.img} alt={product.name} />
                <div className="case-info">
                  <h2>{product.name}</h2>
                  <div className="price-container">
                    <h3>{product.price} $</h3>
                    {product.oldPrice && <h4>{product.oldPrice}</h4>}
                  </div>
                </div>
                <div className='case-rating'>
                  <p>⭐ {product.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Case;
