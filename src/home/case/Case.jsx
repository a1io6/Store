import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './case.css';

function Case() {
  const [casesData, setCasesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://689ead013fed484cf877ace7.mockapi.io/fruit')
      .then(response => {
        // Capture items 43–48 (i.e., last 6 cases)
        setCasesData(response.data.slice(43, 46 ));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='case-logo'>
      <h3>Чехлы</h3>
    
    <div className='case'>
      <div className="case-all">
        {casesData.map(item => (
          <div className="case-one" key={item.id}>
            {item.img && (
              <img src={item.img} alt={item.name} />
            )}
         <div><h3>{item.name}</h3> </div>   
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Case;
