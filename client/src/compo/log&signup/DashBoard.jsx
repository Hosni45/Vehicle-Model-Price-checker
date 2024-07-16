import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './design.css';

const DashBoard = () => {
  const [data, setData] = useState([]);

  

  var url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=A4BLE8TJVP9EH7UZ`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div className='all'>
        <div className='Menu' >
          <a href="/profile">
          
          <button  style={{borderRadius : "50px"}}><img src="https://cdn-icons-png.flaticon.com/256/3917/3917688.png" alt="user"  /></button>
          </a>
          <a href="/logout">
          <button style={{borderRadius : "50px"}} ><img src="https://cdn-icons-png.flaticon.com/256/126/126467.png" alt="log Out"  /></button>
          </a>
        </div>
        <div className='rightside'>

          
        </div>
        <div className="card">
          <div className="card-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/2018_Toyota_Land_Cruiser_Prado_%28GDJ150R%29_GXL_wagon_%282018-08-06%29_01.jpg/1200px-2018_Toyota_Land_Cruiser_Prado_%28GDJ150R%29_GXL_wagon_%282018-08-06%29_01.jpg" alt="Vehicle" />
          </div>
          <div className="card-details">
            <h2>Model Name</h2>
            <p>Description of the vehicle.</p>
            <p>Year: 2023</p>
            <p>Price: $25,000</p>
          </div>
        </div>
        <div className='leftside'>
          <iframe className='ad' style={{ borderRadius: "20px", marginRight:"30px" }} width="400" height="405" src="https://www.youtube.com/embed/TMnfnmvAj38" title="Boost your orders on Glovo!" controls={false} modestbranding="1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
