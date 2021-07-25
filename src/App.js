import React, { useState, useEffect } from 'react';
import Mission from './component/Mission';
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
      <nav>
        <div className="logo">
          Space<span>X</span> Missions
        </div>
      </nav>
      <img src="" autoplay muted id="bg" />
      {data.map((mission, index) => {
        return <Mission info={data[index]} key={data.mission_id} />;
      })}
    </div>
  );
}
