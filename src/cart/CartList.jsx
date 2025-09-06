import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import cartCorzina from '../assets/cart.svg';
import "./CartList.css";

function CartList() {
  const { cartItems, updateCount, removeFromCart } = useContext(CartContext);
  const deliveryBase = 499;

  const totalCount = cartItems.reduce((sum, item) => sum + (item.count || 1), 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0);
  const totalDelivery = deliveryBase * totalCount;
  const total = subtotal + totalDelivery;

  if (cartItems.length === 0) {
    return (
      <div className="cartEmpty">
        <img src={cartCorzina} alt="Корзина пустая" className="cartEmptyImg" />
        <h2>Корзина пуста</h2>
        <p>Но это никогда не поздно исправить 🙂</p>
        <Link to="/" className="backToShop">В каталог товаров</Link>
      </div>
    );
  }

  return (
    <div className="cartList">
      <div className="cartGrid">
        <div className="cartColLeft">
          <h3 className="cartSectionTitle">Корзина</h3>
          {cartItems.map(item => (
            <div className="cartCard" key={item.id}>
              <div className="cartRow">
                <img className="cartItemImg" src={item.img} alt={item.name} />
                <div className="cartItemMain">
                  <div className="cartItemHead">
                    <div>
                      <p className="cartItemTitle">{item.name}</p>
                      <p className="cartItemSub">{item.price} $</p>
                    </div>
                    <div className="cartItemTotal">{(item.price * (item.count || 1))} $</div>
                  </div>
                  <div className="cartQty">
                    <button type="button" onClick={() => updateCount(item.id, -1)}>−</button>
                    <span>{item.count || 1}</span>
                    <button type="button" onClick={() => updateCount(item.id, 1)}>+</button>
                    <button type="button" className="cartRemoveBtn" onClick={() => removeFromCart(item.id)}>х</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <h3 className="cartSectionTitle">Доставка</h3>
          <div className="cartDeliveryCard">
            <div className="cartMap">
              <iframe
                src="https://yandex.com/map-widget/v1/?ll=74.585671%2C42.880350&z=16&l=map&pt=74.585671,42.880350,pm2rdm"
                width="625px"
                height="200px"
                frameBorder="0"
                allowFullScreen
                title="Yandex Map"
              ></iframe>
            </div>
            <div className="cartDeliveryRow">
              <div className="cartDeliveryLeft">
                <span>Доставка курьером</span>
              </div>
              <div className="cartDeliveryPrice">{totalDelivery} $</div>
            </div>
          </div>
        </div>

        <aside className="cartRight">
          <div className="cartSummary">
            <div className="cartSummaryHead">
              <span>ИТОГО</span>
              <strong>{total} $</strong>
            </div>
            <div className="cartSummaryRow">
              <span>Товаров</span>
              <span>{totalCount}</span>
            </div>
            <div className="cartSummaryRow">
              <span>Сумма</span>
              <span>{subtotal} $</span>
            </div>
            <div className="cartSummaryRow">
              <span>Доставка</span>
              <span>{totalDelivery} $</span>
            </div>
            <Link to="/auther" className="cartCheckoutBtn">
              Перейти к оформлению
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CartList;
