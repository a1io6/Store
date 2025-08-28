import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartList.css";

function CartList() {
  const [count, setCount] = useState(0);
  const [delivery, setDelivery] = useState(499); 

  const price = 0; 
  const subtotal = price * count;
  const total = subtotal + delivery;

  const inc = () => {
    setCount(count + 1);
    setDelivery((prev) => Math.round(prev * 1.05)); 
  };

  const dec = () => {
    if (count > 1) {
      setCount(count - 1);
      setDelivery((prev) => Math.round(prev / 1.05)); 
    }
  };

  return (
    <div className="list">
      <div className="grid">
        <div className="col-left">
          <h3 className="section-title">Корзина</h3>

          <div className="card card-cart">
            <div className="cart-row">
              <img className="item-img" src="" alt="Apple BYZ S852I" />

              <div className="item-main">
                <div className="item-head">
                  <div>
                    <p className="item-title"></p>
                    <p className="item-sub">{price.toLocaleString("ru-RU")} $</p>
                  </div>
                  <div className="item-right-price">
                    {subtotal.toLocaleString("ru-RU")} $
                  </div>
                </div>

                <div className="qty">
                  <button type="button" onClick={dec}>−</button>
                  <span>{count}</span>
                  <button type="button" onClick={inc}>+</button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="section-title">Доставка</h3>
          <div className="card card-delivery">
            <div className="map">
              <img src="" alt="Карта доставки" />
            </div>
            <div className="delivery-row">
              <div className="delivery-left">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 7h11v7h2.5l2.5-3h2v6h-1a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3V7z" fill="#7B7B7B"/>
                </svg>
                <span>Доставка курьером</span>
              </div>
              <div className="delivery-price">
                {delivery.toLocaleString("ru-RU")} $
              </div>
            </div>
          </div>
        </div>

        <aside className="col-right">
          <div className="card summary">
            <div className="summary-head">
              <span>ИТОГО</span>
              <strong>{total.toLocaleString("ru-RU")} $</strong>
            </div>
            <div className="summary-row">
              <span>Товаров</span>
              <span>{count}</span>
            </div>
            <div className="summary-row">
              <span>Сумма</span>
              <span>{subtotal.toLocaleString("ru-RU")} $</span>
            </div>
            <div className="summary-row">
              <span>Доставка</span>
              <span>{delivery.toLocaleString("ru-RU")} $</span>
            </div>
            <Link to="/auther" className="checkout-btn">
              Перейти к оформлению
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CartList;
