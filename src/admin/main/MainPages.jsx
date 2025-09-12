import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./mainPages.css";
import { ReviewContext } from "../../context/ReviewContext";

function MainPages() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deletedOrders, setDeletedOrders] = useState([]);
  const { reviews } = useContext(ReviewContext); // бардык суроолорду алабыз

  const fetchData = () => {
    axios.get("https://689ead013fed484cf877ace7.mockapi.io/fruit")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));

    axios.get("https://689ead013fed484cf877ace7.mockapi.io/orders")
      .then(res => {
        const allOrders = res.data;
        setOrders(allOrders.filter(order => !order.deleted));
        setDeletedOrders(allOrders.filter(order => order.deleted));
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const lastAddedProducts = products.slice(-5).reverse().map((p, i) => ({
    type: "add-product",
    text: `Добавлен товар "${p.name}"`,
    id: `p-${i}`,
  }));

  const lastOrdersActions = orders.slice(-5).reverse().map((o, i) => ({
    type: "new-order",
    text: `Новый заказ от "${o.buyer}" - ${o.product} (${o.quantity} шт)`,
    id: `o-${i}`,
  }));

  const lastDeletedOrdersActions = deletedOrders.slice(-5).reverse().map((o, i) => ({
    type: "deleted-order",
    text: `Удалён заказ от "${o.buyer}" - ${o.product} (${o.quantity} шт)`,
    id: `d-${i}`,
  }));

  const lastActions = [
    ...lastAddedProducts,
    ...lastOrdersActions,
    ...lastDeletedOrdersActions,
  ]
    .sort((a, b) => a.id.localeCompare(b.id))
    .slice(-10);

  return (
    <div className="dashboard">
      <h1>Панель управления</h1>

      <div className="cards">
        <div className="card">Всего товаров <span>{products.length}</span></div>
        <div className="card">
          Активные товары <span>{products.filter(p => p.activated).length}</span>
        </div>
        <div className="card">Вопросы <span>{reviews.length}</span></div>
      </div>

      <div className="activity">
        <h2>Последние действия</h2>
        <ul>
          {lastActions.map(action => (
            <li
              key={action.id}
              style={{ color: action.type === "deleted-order" ? "red" : "black" }}
            >
              {action.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainPages;
