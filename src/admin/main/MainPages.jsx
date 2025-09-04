import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainPages.css";

function MainPages() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deletedOrders, setDeletedOrders] = useState([]);

  // Бардык маалыматтарды алуу
  const fetchData = () => {
    // Товары
    axios.get("https://689ead013fed484cf877ace7.mockapi.io/fruit")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));

    // Заказы
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

  // Акыркы 5 операция – товар кошуу
  const lastAddedProducts = products
    .slice(-5)
    .reverse()
    .map((p, i) => ({
      type: "add-product",
      text: `Добавлен товар "${p.name}"`,
      id: `p-${i}`,
    }));

  // Акыркы 5 заказ
  const lastOrdersActions = orders
    .slice(-5)
    .reverse()
    .map((o, i) => ({
      type: "new-order",
      text: `Новый заказ от "${o.buyer}" - ${o.product} (${o.quantity} шт)`,
      id: `o-${i}`,
    }));

  // Акыркы 5 өчүрүлгөн заказ
  const lastDeletedOrdersActions = deletedOrders
    .slice(-5)
    .reverse()
    .map((o, i) => ({
      type: "deleted-order",
      text: `Удалён заказ от "${o.buyer}" - ${o.product} (${o.quantity} шт)`,
      id: `d-${i}`,
    }));

  // Бардык соңку аракеттерди бириктирүү
  const lastActions = [
    ...lastAddedProducts,
    ...lastOrdersActions,
    ...lastDeletedOrdersActions,
  ]
    .sort((a, b) => a.id.localeCompare(b.id)) // сортировка керек болсо
    .slice(-10); // акыркы 10 аракетти гана көрсөтөт

  return (
    <div className="dashboard">
      <h1>Панель управления</h1>

      <div className="cards">
        <div className="card">Всего товаров <span>{products.length}</span></div>
        <div className="card">
          Активные товары <span>{products.filter(p => p.activated).length}</span>
        </div>
        <div className="card">Новые отзывы <span>0</span></div>
        <div className="card">Вопросы <span>0</span></div>
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
