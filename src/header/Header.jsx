// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdPhoneIphone } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import { BiUser } from "react-icons/bi";
// import { useSelector } from "react-redux";
// import { CartContext } from "../context/CartContext";
// import { FavoriteContext } from "../context/FavoriteContext";
// import Catalog from "../page/catalog/Catalog";
// import "./header.css";
// import Catalog from "../page/catalog/Catalog";
// function Header() {
//   const navigate = useNavigate();
//   const { cartItems } = useContext(CartContext);
//    const { favoriteItems, removeFromFavorite } = useContext(FavoriteContext);
//   const handleChange = (e) => {
//     const model = e.target.value;
//     if (model !== "Выбрать модель телефона") {
//       navigate(`/phone/${model}`);
//     }
//   };

//   return (
//     <div className="header">
//       <div className="header-all">
//         {/* Левая часть */}
//         <div className="header-left">
//           <div className="header-logo">
//             <Link to="/"><h1>QPICK</h1></Link>
//           </div>
//           <div className="header-iphone">
//             <div className="header-img"><MdPhoneIphone /></div>
//             <select onChange={handleChange}>
//               <option>Выбрать модель телефона</option>
//               <option>apple</option>
//               <option>samsung</option>
//               <option>nokia</option>
//               <option>xiaomi</option>
//               <option>redmi</option>
//               <option>sony</option>
//               <option>case</option>
//               <option>headphones</option>
//               <option>airpods</option>
//             </select>
//           </div>
//         </div>
//         <Link to="/catalog">все товары</Link>
//         <Catalog/>

//         <div className="haeder-icons">
//           <Link to="/favorite" className="icon-wrapper">
//             <CiHeart size={24} style={{ cursor: "pointer" }} />
//             {favoriteItems.length > 0 && (
//               <span className="cart-count1">{favoriteItems.length}</span>
//             )}
//           </Link>


//           <Link to="/cartlist" className="icon-wrapper">
//             <IoCartOutline size={24} style={{ cursor: "pointer" }} />
//             {cartItems.length > 0 && (
//               <span className="cart-count2">{cartItems.length}</span>
//             )}
//           </Link>

//           <BiUser
//             size={24}
//             style={{ cursor: "pointer" }}
//             onClick={() => navigate("/login")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);

  const handleChange = (e) => {
    const model = e.target.value;
    if (model !== "Выбрать модель телефона") {
      navigate(`/phone/${model}`);
    }
  };

  return (
    <div className="header">
      <div className="header-all">
        {/* Левая часть */}
        <div className="header-left">
          <div className="header-logo">
            <Link to="/"><h1>QPICK</h1></Link>
          </div>
          <div className="header-iphone">
            <div className="header-img"><MdPhoneIphone /></div>
            <select onChange={handleChange}>
              <option>Выбрать модель телефона</option>
              <option>apple</option>
              <option>samsung</option>
              <option>nokia</option>
              <option>xiaomi</option>
              <option>redmi</option>
              <option>sony</option>
              <option>case</option>
              <option>headphones</option>
              <option>airpods</option>
            </select>
          </div>
        </div>

  
        <div className="header-catalog">
          <Link to="/catalog">Все товары</Link>
         
        </div>

        {/* Иконки */}
        <div className="haeder-icons">
          <Link to="/favorite" className="icon-wrapper">
            <CiHeart size={24} style={{ cursor: "pointer" }} />
            {favoriteItems.length > 0 && (
              <span className="cart-count1">{favoriteItems.length}</span>
            )}
          </Link>

          <Link to="/cartlist" className="icon-wrapper">
            <IoCartOutline size={24} style={{ cursor: "pointer" }} />
            {cartItems.length > 0 && (
              <span className="cart-count2">{cartItems.length}</span>
            )}
          </Link>

          <BiUser
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
