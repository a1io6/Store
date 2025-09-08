import { useContext } from "react";
import QRCode from "react-qr-code";
import { FruitContext } from "../context/FruitContext";

export default function FruitList() {
  const { fruits } = useContext(FruitContext);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {fruits.map(f => (
        <div
          key={f.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative", // QR үчүн контейнер
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={f.img}
            alt={f.name}
            style={{ width: "150px", height: "150px", objectFit: "cover", marginBottom: "10px" }}
          />

          <h3 style={{ margin: "5px 0" }}>{f.name}</h3>
          <p style={{ margin: "0 0 10px 0" }}>${f.price}</p>

          {/* Кичинекей QR коду блоктун ичинде */}
          <div style={{ marginTop: "auto" }}>
            <QRCode value={`https://buy.example.com/product/${f.id}`} size={80} />
          </div>

          {/* Аксессуарлар тизмеси */}
          {f.accessories && (
            <ul style={{ paddingLeft: "15px", marginTop: "10px" }}>
              {f.accessories.map(a => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
