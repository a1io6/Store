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
      <h1>Shopping Dashboard</h1>
      <p>Total products sold: <strong>{totalSold}</strong></p>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order №</th>
            <th>Contact</th>
            <th>Promo</th>
            <th>Products</th>
            <th>Subtotal</th>
            <th>Delivery</th>
            <th>Total</th>
            <th>Address</th>
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
                {order.address?.city}, {order.address?.street}, дом {order.address?.house}, подъезд {order.address?.entrance}, кв. {order.address?.apartment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shopping;
