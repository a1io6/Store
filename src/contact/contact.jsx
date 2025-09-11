// src/page/contact/Contact.jsx
import React from "react";
import { FaWhatsapp, FaVk, FaInstagram, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import "./contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Сол жакта карта */}
        <div className="map-block">
          <h4>{t("officeTitle")}</h4>
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=74.585671%2C42.880350&z=16&l=map&pt=74.585671,42.880350,pm2rdm"
            width="750px"
            height="250px"
            frameBorder="0"
            allowFullScreen
            title="Yandex Map"
          ></iframe>

          <p className="address">
            📍 {t("officeAddress")} <br />
            {t("officeFloor")}
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
        <span>{t("phoneNumber")}</span>
      </div>
    </div>
  );
}

export default Contact;
