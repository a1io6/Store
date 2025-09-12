import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adminHeader.css";

function AdminHeader() {
  const navigate = useNavigate();
  return (
    <aside className="adminSidebar">
      <div className="sidebar-header">
        <h2>Панель администратора</h2>
      </div>

      <nav className="sidebar-menu">
        <Link to="/admin">Главная</Link>
        <Link to="/products">Товары</Link>
        <Link to="/shopping">Покупки</Link>
        <Link to="/adminreviews">Вопросы</Link>
      </nav>

      <div className="sidebar-footer">
        <button
          onClick={() => {
            navigate("/");
            localStorage.removeItem("user");
          }}
          className="logout-btn"
        >
          Выход
        </button>
      </div>
    </aside>
  );
}

export default AdminHeader;