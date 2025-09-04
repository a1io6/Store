// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import './nokia.css';
// import { CartContext } from '../../context/CartContext';
// // import { FavoriteContext } from '../../context/FavoriteContext';
// import { removeWish } from '../../store/auth/Favorite';
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux';

// function Nokia({box}) {
//   const [productsData, setProductsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useContext(CartContext);
//   // const { addToFavorite } = useContext(FavoriteContext);
// const dispatch = useDispatch ()
//   useEffect(() => {
//     axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
//       .then(response => {
//         setProductsData(response.data.slice(7, 13)); // Nokia
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className='nokia'>
//       <div className="nokia-all">
//         {productsData.map(product => (
//           <div className="nokia-blok1" key={product.id}>
//             <div className='blok1'>
//               <div className='blok1-icons'>
//                 <CiHeart className="heart-icon" onClick={()=> dispatch(removeWish (box.id))} />
//                 <IoCartOutline 
//                   className="cart-icon" 
//                   onClick={() => addToCart(product)} 
//                 />
//               </div>
//               <img src={product.img} alt={product.name} />
//               <div className="product-info">
//                 <h2>{product.name}</h2>
//                 <div className="price-container">
//                   <h3>{product.price} $</h3>
//                   {product.oldPrice && <h4>{product.oldPrice}</h4>}
//                 </div>
//               </div>
//               <div className='reiting'>
//                 <p>⭐ {product.rating}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Nokia;
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import "./nokia.css";
import { CartContext } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addWish } from "../../store/auth/Favorite";

function Nokia() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favorite);

  useEffect(() => {
    axios
      .get("https://689ead013fed484cf877ace7.mockapi.io/fruit")
      .then((response) => {
        setProductsData(response.data.slice(7, 13)); // Nokia
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const isFavorite = (product) => items.some((i) => i.id === product.id);

  return (
    <div className="nokia">
      <div className="nokia-all">
        {productsData.map((product) => (
          <div className="nokia-blok1" key={product.id}>
            <div className="blok1">
              <div className="blok1-icons">
                <CiHeart
                  className={`heart-icon ${isFavorite(product) ? "active" : ""}`}
                   
                />
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
              <div className="reiting">
                <p>⭐ {product.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nokia;
