import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { OrdersContext } from '../context/OrdersContext';
import { useTranslation } from 'react-i18next';
import './auther.css';

function Auther() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { cartItems } = useContext(CartContext);
  const { addOrder } = useContext(OrdersContext);

  const [promo, setPromo] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [entrance, setEntrance] = useState("");
  const [apartment, setApartment] = useState("");

  const deliveryBase = 499;

  const totalCount = cartItems.reduce((sum, item) => sum + (item.count || 1), 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0);
  const totalDelivery = deliveryBase * totalCount;
  const total = subtotal + totalDelivery;

  function finishOrder() {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    const order = {
      orderNumber,
      phone,
      promo,
      cartItems,
      subtotal,
      totalDelivery,
      total,
      address: { city, street, house, entrance, apartment },
    };
    addOrder(order);
    navigate("/finall", { state: order });
  }

  if (cartItems.length === 0) {
    return <p style={{ padding: "20px" }}>{t('cartEmpty')}</p>;
  }

  return (
    <div className="auther">
      <div className="box">
        <h2>{t('orderTitle')}</h2>
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=74.585671%2C42.880350&z=16&l=map&pt=74.585671,42.880350,pm2rdm"
          width="400px"
          height="200px"
          frameBorder="0"
          allowFullScreen
          title="Yandex Map"
        ></iframe>

        <div className="dostavka">
          <h3>{t('deliveryAddress')}</h3>
          <input type="text" placeholder={t('city')} value={city} onChange={e => setCity(e.target.value)} />
          <input type="text" placeholder={t('street')} value={street} onChange={e => setStreet(e.target.value)} />
          <div className="address-row">
            <input type="text" placeholder={t('house')} value={house} onChange={e => setHouse(e.target.value)} />
            <input type="text" placeholder={t('entrance')} value={entrance} onChange={e => setEntrance(e.target.value)} />
            <input className="dom" type="text" placeholder={t('apartment')} value={apartment} onChange={e => setApartment(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="box1">
        <h2>{t('yourOrder')}</h2>
        <div className="order-list">
          {cartItems.map(item => (
            <div key={item.id} className="order-row">
              <span>{item.count || 1}x {item.name}</span>
              <span>{item.price * (item.count || 1)} $</span>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <div className="order-row">
            <span>{t('delivery')}:</span>
            <span>{totalDelivery} $</span>
          </div>
          <div className="order-row total">
            <span><strong>{t('totalToPay')}:</strong></span>
            <span><strong>{total} $</strong></span>
          </div>
        </div>

        <h3>{t('paymentMethod')}</h3>
        <select>
          <option>{t('kaspiAccount')}</option>
          <option>{t('onlineCard')}</option>
          <option>{t('cashCourier')}</option>
        </select>

        <div className="promo">
          <input
            type="text"
            placeholder={t('havePromo')}
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
        </div>

        <h3>{t('recipientPhone')}</h3>
        <input
          className="input1"
          type="number"
          placeholder="+7 ___ ___ __ __"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={finishOrder} className="finish-btn">
          {t('finishOrder')}
        </button>
      </div>
    </div>
  );
}

export default Auther;
