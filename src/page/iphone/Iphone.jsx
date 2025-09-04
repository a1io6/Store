import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import './iphone.css';
import { CartContext } from '../../context/CartContext';
// import { FavoriteContext } from '../../context/FavoriteContext';
function Iphone() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
const {addToFavorite} =useContext (FavoriteContext)
  useEffect(() => {
    axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit`)
      .then(response => {
        setProductsData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  console.log(productsData);
  
  return (
    <div className='iphone'>
      <div className="iphone-all">
        {productsData.map(product => (
          <div className="iphone-blok1" key={product.id}>
            <div className='blok1'>
              <div className='blok1-icons'>
                <CiHeart className="heart-icon" onClick={()=> addToCart(product)}/>
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
                {/* <p>⭐ {product.rating}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
