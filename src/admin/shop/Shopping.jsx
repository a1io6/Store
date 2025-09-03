import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Shopping.css';
import Loading from '../../shared/Loading';

function ShoppingAdmin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Получаем заказы с MockAPI
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
      .then(response => {
        // Предполагаем, что API возвращает объекты с полями:
        // id, buyer, product, quantity, contact, address: { city, street, house, entrance, apartment }
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке заказов:', error);
      });
  }, []);

  const totalSold = orders.reduce((sum, order) => sum + (order.quantity || 0), 0);
    // if (Loading)
    // return (
    //   <div
    //     style={{
    //       margin: "100px auto",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Loading />;
    //   </div>
    // );

  return (
    <div className="shopping-admin">
      <h1>Shopping Dashboard</h1>
      <p>Total products sold: <strong>{totalSold}</strong></p>

      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Buyer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.buyer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.contact}</td>
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

export default ShoppingAdmin;
