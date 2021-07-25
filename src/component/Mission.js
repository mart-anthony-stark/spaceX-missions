import React, { useState, useEffect } from 'react';

function Mission({ info }) {
  console.log(info);
  function showManufacturers() {
    return info.manufacturers.map(m => {
      return m + ', ';
    });
  }
  return (
    <div className="mission">
      <a href={info.website} target="_blank">
        <h2>{info.mission_name}</h2>
      </a>
      <h3>
        <a href={info.wikipedia}> Go to wikipedia page </a>
      </h3>
      <p>Manufacturers: {showManufacturers()}</p>
      <p id="description">{info.description}</p>
    </div>
  );
}

export default Mission;
