import React from 'react'
import './Auther.css'

function Auther() {
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

          <div className="order-info">
            <span>1x Наушники Apple BYZ S852I</span>
            <span>Доставка: 499 ₸</span>
            <span>К оплате: 2 927 ₸</span>
          </div>
            
             <div className="order-info">
          <h3>Способ оплаты</h3>
          <select>
            <option>Счет на kaspi.kz</option>
            <option>Картой онлайн</option>
            <option>Наличные курьеру</option>
          </select>
            </div>
          <div className="promo">
            <input type="text" placeholder="Есть промокод?" />
          </div>

          <h3>Номер получателя</h3>
          <input className='input1' type="number" placeholder="+7 ___ ___ __ __" />

          <button className="finish-btn">Закончить оформление</button>
        </div>

      </div>
    </div>
  )
}

export default Auther