import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPhoneIphone } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import "./header.css";
import { useTranslation } from 'react-i18next'


function Header() {
    const {t} = useTranslation()
  const navigate = useNavigate();
  const [Scrolled, SetScrolled] = useState(false)
  const { cartItems } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    const model = e.target.value;
    if (model !== "Выбрать модель телефона") {
      navigate(`/phone/${model}`);
      setMenuOpen(false);
    }
  };
  useEffect(()=>{
    const handleScrolled = () =>{
      SetScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll",handleScrolled)
    return () => window.removeEventListener("scroll", handleScrolled)
  }, [])

  return (
    <div className={`header ${Scrolled ? "active" : ""}`}>
      <div className="header-all">
        {/* Левая часть */}
        <div className="header-left">
          <div className="header-logo">
            <Link to="/"><h1> {t("logo")} </h1></Link>
          </div>
          <div className="header-iphone">
            <div className="header-img"><MdPhoneIphone /></div>
            <select onChange={handleChange}>
              <option> {t("chooseModel")} </option>
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
          <Link to="/catalog"> {t("catalogTitle")} </Link>
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

        {/* Бургер кнопка */}
        <button
          className={`burger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Мобил меню */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        <nav>
          <Link to="/catalog" onClick={() => setMenuOpen(false)}> {t("catalogTitle")} </Link>
          <Link to="/favorite" onClick={() => setMenuOpen(false)}> {t("favorite")} </Link>
          <Link to="/cartlist" onClick={() => setMenuOpen(false)}> {t("cart")} </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}> {t("contact")} </Link>
        </nav>

        <div className="mobile-select">
          <label> {t("chooseModel")} </label>
          <select onChange={handleChange}>
            <option>{t("chooseModel")} </option>
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

      {/* overlay фон */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </div>
  );
}

export default Header;
