// AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./adminHeader.css";

function AdminHeader() {
  return (
    <aside className="adminSidebar">
      <div className="sidebar-header">
        <h2>Панель администратора</h2>
      </div>

      <nav className="sidebar-menu">
        <Link to="/">Главная</Link>
        <Link to="/products">Товары</Link>
        <Link to="/projects">покупки</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/questions">Вопросы</Link>
        <Link to="/calls">Запросы звонков</Link>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">Выход</button>
      </div>
    </aside>
  );
}

export default AdminHeader;