import React, { useContext } from "react";
import { OrdersContext } from "../../context/OrdersContext";
import './Shopping.css';

function Shopping() {
  const { orders } = useContext(OrdersContext);

  const totalSold = orders.reduce(
    (sum, order) => sum + (order.cartItems?.reduce((s, i) => s + (i.count || 1), 0) || 0),
    0
  );

  return (
    <div className="shopping-admin">
  <h1>Панель заказов</h1>
  <p>Всего продано товаров: <strong>{totalSold}</strong></p>

  <table className="orders-table">
    <thead>
      <tr>
        <th>Заказ №</th>
        <th>Контакт</th>
        <th>Промо</th>
        <th>Товары</th>
        <th>Сумма</th>
        <th>Доставка</th>
        <th>Итого</th>
        <th>Адрес</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.orderNumber}>
          <td>{order.orderNumber}</td>
          <td>{order.phone}</td>
          <td>{order.promo}</td>
          <td>
            {order.cartItems.map(item => (
              <div key={item.id}>
                {item.count || 1}x {item.name} ({item.price}$)
              </div>
            ))}
          </td>
          <td>{order.subtotal} $</td>
          <td>{order.totalDelivery} $</td>
          <td>{order.total} $</td>
          <td>
            {order.address?.city}, {order.address?.street}, д. {order.address?.house}, подъезд {order.address?.entrance}, кв. {order.address?.apartment}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default Shopping;
