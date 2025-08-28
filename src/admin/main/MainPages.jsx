import React from "react";
import "./MainPages.css";

function MainPages() {
  return (
    <div className="dashboard">
      <h1>Панель управления</h1>
      <div className="cards">
        <div className="card">Всего товаров <span>120</span></div>
        <div className="card">Активные проекты <span>8</span></div>
        <div className="card">Новые отзывы <span>5</span></div>
        <div className="card">Вопросы <span>...</span></div>
      </div>

      <div className="activity">
        <h2>Последние действия</h2>
        <ul>
          <li> Новый товар добавлен: "Премиум виджет"</li>
          <li> Новый отзыв для "Базовой услуги"</li>
          <li> Вопрос от клиента Ивана Иванова</li>
          <li> Запрос звонка от +7 (123) 456-7890</li>
        </ul>
      </div>
    </div>
  );
}

export default MainPages;