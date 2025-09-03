import React, { useEffect, useState } from "react";
import "./Product.css";
import Model from "../ui/Model";
import Loading from "../../shared/Loading";
import axios from "axios";
// import Modal from "../ui/Modal";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("https://689ead013fed484cf877ace7.mockapi.io/fruit")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки:", err);
        setLoading(false);
      });
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://689ead013fed484cf877ace7.mockapi.io/fruit/${id}`
      );
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      alert("Не удалось удалить товар");
    }
  };
  const toggleActivation = async (id, activated) => {
    try {
      const res = await axios.put(
        `https://689ead013fed484cf877ace7.mockapi.io/fruit/${id}`,
        { activated: !activated } // меняем true <-> false
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

  if (loading)
    return (
      <div
        style={{
          margin: "100px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />;
      </div>
    );

  return (
    <>
      <div className="products">
        <div>
          <h1>Товары</h1>
          <button
            onClick={() => {
              setModal(true);
            }}
          >
            create
          </button>
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
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
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
                <td style={{ textDecoration: "line-through", color: "gray" }}>
                  {p.oldPrice}$
                </td>
                <td>{p.category}</td>
                <td>⭐ {p.rating}</td>
                <button onClick={() => handleDelete(p.id)}>delate</button>
                <button onClick={() => toggleActivation(p.id, p.activated)}>
                  {p.activated ? "Отключить" : "Включить"}
                </button>
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
