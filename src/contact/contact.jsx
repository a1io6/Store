// src/page/contact/Contact.jsx
import React from "react";
import { FaWhatsapp, FaVk, FaInstagram, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import "./contact.css"

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Сол жакта карта */}
        <div className="map-block">
          <h4>Наш офис</h4>
          <iframe
          src="https://yandex.com/map-widget/v1/?ll=74.585671%2C42.880350&z=16&l=map&pt=74.585671,42.880350,pm2rdm"
          width="770px"
          height="300px"
          frameBorder="0"
          allowFullScreen
          title="Yandex Map"
        ></iframe>

          <p className="address">
            📍 турусбекова-109.1, Бишкек, Кыргызстан <br />
            4 этаж, 411 кабинет
          </p>
        </div>

        {/* Оң жакта социалдык иконкалар */}
        <div className="social-icons">
          <a href="https://wa.me/995880806" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://vk.com" target="_blank" rel="noreferrer">
            <FaVk />
          </a>
          <a href="https://instagram.com/a1i.o6" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://t.me/https://web.telegram.org/a/" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
        </div>
      </div>

      {/* Телефон */}
      <div className="phone-block">
        <FaPhoneAlt className="phone-icon" />
        <span>+996 995880806    </span>
      </div>
    </div>
  );
}

export default Contact;
