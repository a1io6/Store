import './footer.css'
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram, } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function Footer() {

  const { i18n } = useTranslation();
  const translate = (ln) => {
    i18n.changeLanguage(ln); 
  };
    const {t} = useTranslation()
  
  return (
    <div className="footer">
      <div className="footer-all">
        <div className="footer-logo">
          <Link to="/"><h1> {t("logo")} </h1 ></Link >
        </div>
        <div className="footer-sslk">
          <ul>
            <li><Link to="favorite"> {t("favorite")} </Link></li>
            <li><Link to="cartlist"> {t("cart")} </Link></li>
            <li><Link to="contact"> {t("contact")} </Link></li>
          </ul>
        </div>
        <div className="footer-sslk1">
          <li><Link to="condition"> {t("condition")} </Link></li>
          <li><Link to="/reviews"> {t("questions")} </Link></li>

          <ul>
            <CiGlobe />
            <li onClick={() => translate("kz")}>Каз</li>
            <li onClick={() => translate("ru")}>Рус</li>
            <li onClick={() => translate("en")}>Eng</li>
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