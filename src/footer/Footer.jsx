import './footer.css'
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram,  } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Footer() {
    return (
<div className="footer">
  <div className="footer-all">
    <div className="footer-logo">
    <Link to="/"><h1>QPICK</h1 ></Link >
    </div>
    <div className="footer-sslk">
      <ul>
        <li><Link to="favorite">Избранное</Link></li>
        <li><Link to="cartlist">Корзина</Link></li>
        <li><Link to="contact">Контакты</Link></li>
      </ul>
    </div>
    <div className="footer-sslk1">
      <li><Link to="condition">Условия сервиса</Link></li>
                <li><Link to="/reviews">Вопросы</Link></li>
                
      <ul>
        <CiGlobe />
        <li><a href="">Каз</a></li>
        <li><a href="">Рус</a></li>
        <li><a href="">Eng</a></li>
      </ul>
    </div>
    <div className="footer-icons">
  <div>
    <a href="https://vk.com" target="_blank" rel="noreferrer" style={{ color: "#000" }}>
      <SlSocialVkontakte />
    </a>
  </div>
  <div>
    <a href="https://instagram.com/a1i.o6" target="_blank" rel="noreferrer" style={{ color: "#000" }}>
      <FaInstagram />
    </a>
  </div>
  <div>
    <a href="https://t.me/https://web.telegram.org/a/" target="_blank" rel="noreferrer" style={{ color: "#000" }}>
      <FaTelegram />
    </a>
  </div>
  <div>
    <a href="https://wa.me/995880806" target="_blank" rel="noreferrer" style={{ color: "#000" }}>
      <FaWhatsapp />
    </a>
  </div>
</div>

  </div>
</div>

    )
}

export default Footer