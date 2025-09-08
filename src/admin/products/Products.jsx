import React, { useState, useEffect } from "react";
import "./Product.css";
import Model from "../ui/Model";
import Loading from "../../shared/Loading";
import axios from "axios";

function Products({ isAdmin = true }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  // Загружаем данные с API
  useEffect(() => {
    axios
      .get("https://689ead013fed484cf877ace7.mockapi.io/fruit")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки:", err);
        setLoading(false);
      });
  }, []);

  // Добавление нового товара
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  // Удаление товара
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://689ead013fed484cf877ace7.mockapi.io/fruit/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      alert("Не удалось удалить товар");
    }
  };

  // Включение / Отключение товара
  const toggleActivation = async (id, activated) => {
    try {
      const res = await axios.put(
        `https://689ead013fed484cf877ace7.mockapi.io/fruit/${id}`,
        { activated: !activated }
      );
      setProducts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, activated: res.data.activated } : p
        )
      );
    } catch (err) {
      console.error("Ошибка при обновлении:", err);
      alert("Не удалось изменить статус товара");
    }
  };

  if (loading) {
    return (
      <div
        style={{
          margin: "100px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    );
  }

  // Показываем только активные товары для пользователя
// Колдонуучу үчүн активдүү товарлар гана көрсөтүлөт
const displayedProducts = isAdmin ? products : products.filter((p) => p.activated);

  return (
    <>
      <div className="products">
        <div className="products-header">
          <h1>Товары</h1>
          {isAdmin && <button onClick={() => setModal(true)}>Create</button>}
        </div>

        <table className="products-table">
          <thead>
            <tr>
              <th>Фото</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Скидка</th>
              <th>Старая цена</th>
              <th>Категория</th>
              <th>Рейтинг</th>
              {isAdmin && <th>Действия</th>}
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((p) => (
              <tr key={p.id}>
                <td>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: "50px", borderRadius: "6px" }}
                  />
                </td>
                <td style={{ color: p.activated ? "green" : "red" }}>{p.name}</td>
                <td>{p.price}$</td>
                <td>{p.discount}%</td>
                <td style={{ textDecoration: "line-through", color: "gray" }}>{p.oldPrice}$</td>
                <td>{p.category}</td>
                <td>⭐ {p.rating}</td>
                {isAdmin && (
                  <td>
                    <button onClick={() => handleDelete(p.id)}>Delete</button>
                    <button onClick={() => toggleActivation(p.id, p.activated)}>
                      {p.activated ? "Отключить" : "Включить"}
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <Model
          isOpen={modal}
          onClose={() => setModal(false)}
          onSubmit={handleAddProduct}
        />
      )}
      
    </>
    
  );
  
}

export default Products;
