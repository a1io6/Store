import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./CartList.css";

function CartList() {
  const { cartItems, updateCount } = useContext(CartContext);
  const deliveryBase = 499;

  const totalCount = cartItems.reduce((sum, item) => sum + (item.count || 1), 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0);
  const totalDelivery = deliveryBase * totalCount;
  const total = subtotal + totalDelivery;

  if (cartItems.length === 0) return <p>Корзина пустая</p>;

  return (
    <div className="list">
      <div className="grid">
        <div className="col-left">
          <h3 className="section-title">Корзина</h3>
          {cartItems.map(item => (
            <div className="card card-cart" key={item.id}>
              <div className="cart-row">
                <img className="item-img" src={item.img} alt={item.name} />
                <div className="item-main">
                  <div className="item-head">
                    <div>
                      <p className="item-title">{item.name}</p>
                      <p className="item-sub">{item.price} $</p>
                    </div>
                    <div className="item-right-price">
                      {(item.price * (item.count || 1))} $
                    </div>
                  </div>
                  <div className="qty">
                    <button type="button" onClick={() => updateCount(item.id, -1)}>−</button>
                    <span>{item.count || 1}</span>
                    <button type="button" onClick={() => updateCount(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <h3 className="section-title">Доставка</h3>
          <div className="card card-delivery">
            <div className="map">
              <img src="" alt="Карта доставки" />
            </div>
            <div className="delivery-row">
              <div className="delivery-left">
                <span>Доставка курьером</span>
              </div>
              <div className="delivery-price">
                {/* {delivery.toLocaleString("ru-RU")} $ */}
              </div>
              <div className="delivery-price">{totalDelivery} $</div>
            </div>
          </div>
        </div>

        <aside className="col-right">
          <div className="card summary">
            <div className="summary-head">
              <span>ИТОГО</span>
              <strong>{total} $</strong>
            </div>
            <div className="summary-row">
              <span>Товаров</span>
              <span>{totalCount}</span>
            </div>
            <div className="summary-row">
              <span>Сумма</span>
              <span>{subtotal} $</span>
            </div>
            <div className="summary-row">
              <span>Доставка</span>
              <span>{totalDelivery} $</span>
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
