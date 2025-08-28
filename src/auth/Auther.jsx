// import React from 'react'
// import './Auther.css'

// function Auther() {
//   return (
//     <div>
//       <div className='auther'>

//         <div className="box">
//           <h2>Оформление заказа</h2>
//           <iframe
//             src="https://yandex.com/map-widget/v1/?ll=74.585671%2C42.880350&z=16&l=map&pt=74.585671,42.880350,pm2rdm"
//             width="400px"
//             height="200px"
//             frameBorder="0"
//             allowFullScreen
//             title="Yandex Map"
//           ></iframe>

//           <div className='dostavka'>
//             <h3>Адрес доставки</h3>
//             <input type="text" placeholder="Город" />
//             <input type="text" placeholder="Улица / Район" />
//             <div className="address-row">
//               <input type="text" placeholder="Дом" />
//               <input type="text" placeholder="Подъезд" />
//               <input className='dom' type="text" placeholder="Квартира" />
//             </div>
//           </div>
//         </div>

//         <div className="box1">
//           <h2>Ваш заказ</h2>

//           <div className="order-info">
//             <span>1x Наушники Apple BYZ S852I</span>
//             <span>Доставка: 499 ₸</span>
//             <span>К оплате: 2 927 ₸</span>
//           </div>
            
//              <div className="order-info">
//           <h3>Способ оплаты</h3>
//           <select>
//             <option>Счет на kaspi.kz</option>
//             <option>Картой онлайн</option>
//             <option>Наличные курьеру</option>
//           </select>
//             </div>
//           <div className="promo">
//             <input type="text" placeholder="Есть промокод?" />
//           </div>

//           <h3>Номер получателя</h3>
//           <input className='input1' type="number" placeholder="+7 ___ ___ __ __" />

//           <button className="finish-btn">Закончить оформление</button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Auther
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Auther.css';

function Auther() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const [promo, setPromo] = useState("");
  const [phone, setPhone] = useState("");

  const deliveryBase = 499;
  const totalCount = cartItems.reduce((sum, item) => sum + (item.count || 1), 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0);
  const totalDelivery = deliveryBase * totalCount;
  const total = subtotal + totalDelivery;

  function finishOrder() {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    navigate("/finall", {
      state: {
        orderNumber,
        phone,
        promo,
        cartItems,
        subtotal,
        totalDelivery,
        total
      }
    });
  }

  if (cartItems.length === 0) {
    return <p style={{ padding: "20px" }}>Корзина пустая</p>;
  }

  return (
    <div>
      <div className='auther'>
        <div className="box">
          <h2>Оформление заказа</h2>
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=74.585671%2C42.880350&z=16&l=map&pt=74.585671,42.880350,pm2rdm"
            width="400px"
            height="200px"
            frameBorder="0"
            allowFullScreen
            title="Yandex Map"
          ></iframe>

          <div className='dostavka'>
            <h3>Адрес доставки</h3>
            <input type="text" placeholder="Город" />
            <input type="text" placeholder="Улица / Район" />
            <div className="address-row">
              <input type="text" placeholder="Дом" />
              <input type="text" placeholder="Подъезд" />
              <input className='dom' type="text" placeholder="Квартира" />
            </div>
          </div>
        </div>

        <div className="box1">
          <h2>Ваш заказ</h2>

          <div className="order-list">
            {cartItems.map(item => (
              <div key={item.id} className="order-row">
                <span className='aaa'>{item.count || 1}x {item.name}</span>
                <span>{item.price * (item.count || 1)} $</span>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <div className="order-row">
              <span>Доставка:</span>
              <span>{totalDelivery} $</span>
            </div>
            <div className="order-row total">
              <span><strong>К оплате:</strong></span>
              <span><strong>{total} $</strong></span>
            </div>
          </div>

          <h3>Способ оплаты</h3>
          <select>
            <option>Счет на kaspi.kz</option>
            <option>Картой онлайн</option>
            <option>Наличные курьеру</option>
          </select>

          <div className="promo">
            <input 
              type="text" 
              placeholder="Есть промокод?" 
              value={promo} 
              onChange={(e) => setPromo(e.target.value)} 
            />
          </div>

          <h3>Номер получателя</h3>
          <input 
            className='input1' 
            type="number" 
            placeholder="+7 ___ ___ __ __" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button onClick={finishOrder} className="finish-btn">
            Закончить оформление
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auther;
