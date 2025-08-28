// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdPhoneIphone } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import './header.css';

// function Header() {
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const model = e.target.value;
//     if (model !== "Выбрать модель телефона") {
//       navigate(`/${model.toLowerCase()}`);
//     }
//   };

//   return (
//     <div className="header">
//       <div className="header-all">
//         <div className="header-left">
//           <div className="header-logo">
//             <Link to="/"><h1>QPICK</h1></Link>
//           </div>
//           <div className="header-iphone">
//             <div className="header-img"><MdPhoneIphone /></div>
//             <div className="select">
//               <select onChange={handleChange}>
//                 <option>Выбрать модель телефона</option>
//                 <option>iphone</option>
//                 <option>samsung</option>
//                 <option>nokia</option>
//                 <option>xiaomi</option>
//                 <option>redmi</option>
//                 <option>sony</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="haeder-icons">
//           <CiHeart />
//           <Link to="/cartlist">
//             <IoCartOutline size={24} style={{ cursor: "pointer" }} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdPhoneIphone } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../context/CartContext';
import './header.css';

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleChange = (e) => {
    const model = e.target.value;
    if (model !== "Выбрать модель телефона") {
      navigate(`/${model.toLowerCase()}`);
    }
  };

  return (
    <div className="header">
      <div className="header-all">
        <div className="header-left">
          <div className="header-logo">
            <Link to="/"><h1>QPICK</h1></Link>
          </div>
          <div className="header-iphone">
            <div className="header-img"><MdPhoneIphone /></div>
            <select onChange={handleChange}>
              <option>Выбрать модель телефона</option>
              <option>iphone</option>
              <option>samsung</option>
              <option>nokia</option>
              <option>xiaomi</option>
              <option>redmi</option>
              <option>sony</option>
              <option>airpods</option>
              <option>headphones</option>
            </select>
          </div>
        </div>

        <div className="haeder-icons">
          <CiHeart />
          <Link to="/cartlist">
            <IoCartOutline size={24} style={{ cursor: "pointer" }} />
          </Link>
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </div>
    </div>
  );
}

export default Header;
