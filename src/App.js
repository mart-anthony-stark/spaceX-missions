import React, { useState, useEffect } from 'react';
import Mission from './component/Mission';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);

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

      {data.map((mission, index) => {
        return <Mission info={data[index]} key={data.mission_id} />;
      })}

      <Footer />
    </div>
  );
}
