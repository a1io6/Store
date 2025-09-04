import React, { useState } from "react";
import axios from "axios";
import "./Modal.css";

function Modal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    price: "",
    discount: "",
    oldPrice: "",
    description: "",
    category: "",
    rating: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://689ead013fed484cf877ace7.mockapi.io/fruit",
        {
          ...formData,
          rating: parseFloat(formData.rating) // рейтинг как число
        }
      );

      console.log("Товар создан:", res.data);
      onSubmit(res.data);
      onClose();
    } catch (err) {
      console.error("Ошибка при создании:", err);
      alert("Не удалось создать товар");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Создать товар</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Название" value={formData.name} onChange={handleChange} required />
          <input name="img" placeholder="URL картинки" value={formData.img} onChange={handleChange} required />
          <input name="price" placeholder="Цена" value={formData.price} onChange={handleChange} required />
          <input name="discount" placeholder="Скидка (10%)" value={formData.discount} onChange={handleChange} />
          <input name="oldPrice" placeholder="Старая цена" value={formData.oldPrice} onChange={handleChange} />
          <input name="description" placeholder="Описание" value={formData.description} onChange={handleChange} />
          <select name="category" value={formData.category} onChange={handleChange}required>
            <option value="iphone">iphone</option>
            <option value="samsung">samsung</option>
            <option value="nokia">nokia</option>
            <option value="sony">sony</option>
            <option value="redmi">redmi</option>
            <option value="xiaomi">xiaomi</option>
            <option value="airpods">airpods</option>
            <option value="headphones">headphones</option>
            <option value="case">case</option>
            
          </select>
          <input name="rating" type="number" step="0.1" placeholder="Рейтинг" value={formData.rating} onChange={handleChange} />

          <div className="modal-actions">
            <button type="submit">Создать</button>
            <button type="button" onClick={onClose}>Закрыть</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
