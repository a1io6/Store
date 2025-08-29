// AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./adminHeader.css";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate()
  return (
    <aside className="adminSidebar">
      <div className="sidebar-header">
        <h2>Панель администратора</h2>
      </div>

      <nav className="sidebar-menu">
        <Link to="/admin">Главная</Link>
        <Link to="/products">Товары</Link>
        <Link to="/projects">покупки</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/questions">Вопросы</Link>
        <Link to="/calls">Запросы звонков</Link>
      </nav>

      <div className="sidebar-footer">
        <button onClick={()=>{
          navigate("/")
          localStorage.removeItem("user")
        }} className="logout-btn">Выход</button>
      </div>
    </aside>
  );
}

export default AdminHeader;