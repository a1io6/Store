import './footer.css'
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Footer() {
    return (
<div className="footer">
  <div className="footer-all">
    <div className="footer-logo">
      <h1>QPICK</h1>
    </div>
    <div className="footer-sslk">
      <ul>
        <li><a href="">Избранное</a></li>
        <li><a href="">Корзина</a></li>
        <li><Link to="catalog">Контакты</Link></li>
      </ul>
    </div>
    <div className="footer-sslk1">
      <li><Link to="/condition">Условия сервиса</Link></li>
      <ul>
        <CiGlobe />
        <li><a href="">Каз</a></li>
        <li><a href="">Рус</a></li>
        <li><a href="">Eng</a></li>
      </ul>
    </div>
    <div className="footer-icons">
      <div><SlSocialVkontakte /></div>
      <div><FaInstagram /></div>
      <div><FaTelegram /></div>
      <div><FaWhatsapp /></div>
    </div>
  </div>
</div>

    )
}

export default Footer