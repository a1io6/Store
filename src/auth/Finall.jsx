// import React from "react";
// import { useLocation } from "react-router-dom";

// function Finall() {
//   const location = useLocation();
//   const { orderNumber, phone, promo } = location.state || {};

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Номер вашего заказа №{orderNumber}</h2>
//       <p>С Вами свяжется наш менеджер по номеру: {phone}</p>

//       {promo && (
//         <div style={{ marginTop: "15px", color: "green" }}>
//           <strong>Менеджеру:</strong> клиент использовал промокод: <b>{promo}</b>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Finall;
import React from "react";
import { useLocation } from "react-router-dom";

function Finall() {
  const location = useLocation();
  const { orderNumber, phone, promo, cartItems, subtotal, totalDelivery, total } = location.state || {};

  if (!orderNumber) {
    return <p style={{ padding: "20px" }}>Нет данных о заказе</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Номер вашего заказа №{orderNumber}</h2>
      <p>С Вами свяжется наш менеджер по номеру: {phone}</p>

      <div style={{ marginTop: "20px" }}>
        <h3>Состав заказа:</h3>
        <div style={{ border: "1px solid #eee", borderRadius: "10px", padding: "15px", marginBottom: "15px" }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span>{item.count || 1}x {item.name}</span>
              <span>{item.price * (item.count || 1)} $</span>
            </div>
          ))}
        </div>

        <p>Сумма товаров: {subtotal} $</p>
        <p>Доставка: {totalDelivery} $</p>
        <h3>Итого к оплате: {total} $</h3>

        {promo && (
          <div style={{ marginTop: "15px", color: "green" }}>
            <strong>Менеджеру:</strong> клиент использовал промокод: <b>{promo}</b>
          </div>
        )}
      </div>
    </div>
  );
}

export default Finall;

