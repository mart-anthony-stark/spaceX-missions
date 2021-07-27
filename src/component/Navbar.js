import React from 'react';

export default function Navbar({ tab, setTab, isOpen, setIsOpen }) {
  function handleMenuBtn() {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  }

  return (
    <nav>
      <div className="logo">
        Space<span>X</span> Missions
      </div>
      <div className="nav-btns" id="buttons">
        <button onClick={() => setTab('mission')}>Missions</button>
        <button onClick={() => setTab('history')}>History</button>
        <button onClick={() => setTab('')} />
      </div>
      <div
        className={'menu ' + (isOpen ? 'open' : '')}
        onClick={() => handleMenuBtn()}
      >
        <div className="bar" />
      </div>
    </nav>
  );
}
