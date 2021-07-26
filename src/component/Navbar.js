import React from 'react';

export default function Navbar({ tab, setTab }) {
  return (
    <nav>
      <div className="logo">
        Space<span>X</span> Missions
      </div>
      <div id="buttons">
        <button onClick={() => setTab('mission')}>Missions</button>
        <button onClick={() => setTab('history')}>History</button>
        <button onClick={() => setTab('')} />
      </div>
    </nav>
  );
}
