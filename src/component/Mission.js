import React, { useState, useEffect } from 'react';

function Mission({ info }) {
  console.log(info);
  function showManufacturers() {
    return info.manufacturers.map(m => {
      return m + ' | ';
    });
  }
  return (
    <div className="mission">
      <a href={info.website} target="_blank">
        <h2>{info.mission_name}</h2>
      </a>
      <p>Manufacturers: {showManufacturers()}</p>
      <p id="description">{info.description}</p>
      <h3>
        <a href={info.wikipedia} target="_blank" id="wiki">
          {' '}
          Read more on Wikipedia{' '}
        </a>
      </h3>
    </div>
  );
}

export default Mission;
