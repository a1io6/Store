import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import './ListPhone.css'; // твои стили

function ListPhone() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Подгружаем все телефоны из API (тут для списка)
  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
      .then(res => {
        setPhones(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="phone-list">
      {phones.map(phone => (
        <Link key={phone.id} to={`/phone/${phone.category}`} className="phone-card">
          <img src={phone.img} alt={phone.name} />
          <h3>{phone.name}</h3>
          <p>{phone.price} $</p>
        </Link>
      ))}
    </div>
  );
}

export default ListPhone;
