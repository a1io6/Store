import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Finall() {
  const location = useLocation();
  const { t } = useTranslation();

  const { orderNumber, phone, promo, cartItems, subtotal, totalDelivery, total } =
    location.state || {};

  if (!orderNumber) {
    return <p style={{ padding: "20px" }}>{t("noOrderData")}</p>;
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>
        {t("orderNumber")} №{orderNumber}
      </h2>
      <p>
        {t("managerWillCall")} {phone}
      </p>

      <div style={{ marginTop: "20px" }}>
        <h3>{t("orderComposition")}</h3>
        <div
          style={{
            border: "1px solid #eee",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          {cartItems?.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span>
                {item.count || 1}x {item.name}
              </span>
              <span>{item.price * (item.count || 1)} $</span>
            </div>
          ))}
        </div>

        <p>
          {t("subtotal")}: {subtotal} $
        </p>
        <p>
          {t("delivery")}: {totalDelivery} $
        </p>
        <h3>
          {t("totalToPay")}: {total} $
        </h3>

        {promo && (
          <div style={{ marginTop: "15px", color: "green" }}>
            <strong>{t("forManager")}:</strong> {t("promoUsed")} <b>{promo}</b>
          </div>
        )}
      </div>
    </div>
  );
}

export default Finall;
