import React, { useState, useEffect } from 'react';
import Mission from './component/Mission';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRegex = new RegExp(search, 'i');

  const getResponse = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    const info = await res.json();

    setData(info);
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="app-main">
      <Navbar />

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="missions-wrapper">
        {data
          .filter(m => {
            if (search == '') return m;
            return m.mission_name.match(searchRegex);
          })
          .map((mission, index) => {
            return <Mission info={data[index]} key={data.mission_id} />;
          })}
      </div>

      <Footer />
    </div>
  );
}
