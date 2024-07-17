import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './design.css';

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [amortizedPrice, setAmortizedPrice] = useState(null);

  const prixAmmorti = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year);
    const depreciationRate = 0.15;
    let calculatedPrice = parseFloat(price);

    for (let i = 0; i < age; i++) {
      calculatedPrice -= calculatedPrice * depreciationRate;
    }

    setAmortizedPrice(calculatedPrice.toFixed(2));};

  const url = `https://api.thenewsapi.com/v1/news/all?api_token=fFmudUi4N44IXZlzV9LEsGIRITjSLPuYrzajrYDP&language=en&limit=3`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)})
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='all'>
        <div className='Menu'>
          <a href="/profile">
            <button style={{ borderRadius: '50px' }}>
              <img src="https://cdn-icons-png.flaticon.com/256/3917/3917688.png" alt="user" />
            </button>
          </a>
          <a href="/logout">
            <button style={{ borderRadius: '50px' }}>
              <img src="https://cdn-icons-png.flaticon.com/256/126/126467.png" alt="log Out" />
            </button>
          </a>
        </div>
        <div className='rightside'>
          {data && data.length > 0 ? (
            data.map((article, index) => (
              <div key={index} className="article">
                <h3>{article.title}</h3>
                {article.image_url && <img src={article.image_url} alt={article.title} />}
                <p>{article.description}</p>
              </div>
            ))
          ) : (
            <p>Loading articles...</p>
          )}
        </div>
        <div className="card">
          <div className="card-image">
            <div className='calcInputs'>
              <input type="number" name="year" id="yearCar" placeholder='year' value={year} onChange={(e) => setYear(e.target.value)} />
              <input type="number" name="priceWhenBought" id="priceInput" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button onClick={prixAmmorti}>Calculate</button>
          </div>
          <div className="card-details">
            <h2>Amortized Price</h2>
            {amortizedPrice !== null ? (
              <p>{`TND${amortizedPrice}`}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className='leftside'>
          <iframe className='ad' style={{ borderRadius: '20px', marginRight: '30px' }} width="400" height="405" src="https://www.youtube.com/embed/TMnfnmvAj38" title="Boost your orders on Glovo!" controls={false} modestbranding="1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
