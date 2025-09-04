import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdPhoneIphone } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../context/CartContext';
import { FavoriteContext } from '../context/FavoriteContext'; // 👈 коштук
import './header.css';
import { BiUser } from 'react-icons/bi';

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoriteContext);

  const handleChange = (e) => {
    const model = e.target.value;
    if (model !== "Выбрать модель телефона") {
      navigate(`/phone/${model}`);
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

        <div className="haeder-icons">
          {/* ❤️ Избранное */}
          <Link to="/favorite" className="icon-wrapper">
            <CiHeart size={24} style={{ cursor: "pointer" }} />
            {favorites.length > 0 && <span className="cart-count">{favorites.length}</span>}
          </Link>

          {/* 🛒 Корзина */}
          <Link to="/cartlist" className="icon-wrapper">
            <IoCartOutline size={24} style={{ cursor: "pointer" }} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>

          {/* 👤 Пользователь */}
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
