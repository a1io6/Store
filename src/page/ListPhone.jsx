
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './ListPhone.css';
// import { CartContext } from '../context/CartContext';

// function ListPhone() {
//   const [phone, setPhone] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const { addToCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit/${id}`)
//       .then(res => {
//         setPhone(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!phone) return <p>Phone not found</p>;

//   const handleAddToCart = () => {
//     addToCart(phone);
//   };

//   const handleBuyNow = () => {
//     addToCart(phone);
//     navigate("/auther");
//   };

//   const handleGoBack = () => {
//     navigate(-1); 
//   };

//   return (
//     <div className="phone-list">
//       <div className="phone-card-horizontal">
//         <div className="phone-img">
//           <img src={phone.img} alt={phone.name} />
//         </div>
//         <div className="phone-info">
//           <h3>{phone.name}</h3>
//           <p className="price">{phone.price} $</p>
//           <div className="specs-grid">
//             <p>Weight: {phone.specs.weight}</p>
//             <p>Length: {phone.specs.length}</p>
//             <p>Width: {phone.specs.width}</p>
//             <p>Thickness: {phone.specs.thickness}</p>
//             <p>Water Resistance: {phone.specs.waterResistance}</p>
//             <p>Body Material: {phone.specs.bodyMaterial}</p>
//             <p>Battery: {phone.specs.batteryCapacity}</p>
//             <p>Connection: {phone.specs.connectionType}</p>
//             <p>Screen: {phone.specs.screenSize}</p>
//             <p>Processor: {phone.specs.processor}</p>
//             <p>RAM: {phone.specs.ram}</p>
//             <p>Storage: {phone.specs.storage}</p>
//             <p>Camera: {phone.specs.camera}</p>
//             <p>Front Camera: {phone.specs.frontCamera}</p>
//           </div>

//           <div className="phone-buttons">
//             <button className="buy-now" onClick={handleBuyNow}>Купить</button>
//             <button className="add-cart" onClick={handleAddToCart}>Добавить в корзину</button>
//             <button className="go-back" onClick={handleGoBack}>Назад</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ListPhone;
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ListPhone.css';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

function ListPhone() {
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false); // состояние для кнопки
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://689ead013fed484cf877ace7.mockapi.io/fruit/${id}`)
      .then(res => {
        setPhone(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const user = localStorage.getItem("user")
  const handleAddToCart = () => {
    if (user) {
      addToCart(phone);
      setAdded(true); // меняем состояние после добавления
    }else{
      toast.warn("вы не зарегестрированны")
      navigate("/register")
    }
  };

  const handleBuyNow = () => {
    addToCart(phone);
    navigate("/auther");
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  if (loading) return <p>Loading...</p>;
  if (!phone) return <p>Phone not found</p>;
  return (
    <div className="phone-list">
      <div className="phone-card-horizontal">
        <div className="phone-img">
          <img src={phone.img} alt={phone.name} />
        </div>
        <div className="phone-info">
          <h3>{phone.name}</h3>
          <p className="price">{phone.price} $</p>
          <div className="specs-grid">
            <p>Weight: {phone.specs.weight}</p>
            <p>Length: {phone.specs.length}</p>
            <p>Width: {phone.specs.width}</p>
            <p>Thickness: {phone.specs.thickness}</p>
            <p>Water Resistance: {phone.specs.waterResistance}</p>
            <p>Body Material: {phone.specs.bodyMaterial}</p>
            <p>Battery: {phone.specs.batteryCapacity}</p>
            <p>Connection: {phone.specs.connectionType}</p>
            <p>Screen: {phone.specs.screenSize}</p>
            <p>Processor: {phone.specs.processor}</p>
            <p>RAM: {phone.specs.ram}</p>
            <p>Storage: {phone.specs.storage}</p>
            <p>Camera: {phone.specs.camera}</p>
            <p>Front Camera: {phone.specs.frontCamera}</p>
          </div>

          <div className="phone-buttons">
            <button className="buy-now" onClick={handleBuyNow}>Купить</button>
            <button
              className={`add-cart ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {added ? 'Добавлено!' : 'Добавить в корзину'}
            </button>
            <button className="go-back" onClick={handleGoBack}>Назад</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPhone;
