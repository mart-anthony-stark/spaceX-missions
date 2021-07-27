import React from 'react';

export default function Sidebar({ tab, setTab, isOpen, setIsOpen }) {
  return (
    <div className={'sidebar ' + (isOpen ? 'show' : '')}>
      <div id="buttons">
        <button
          onClick={() => {
            setTab('mission');
            setIsOpen(false);
          }}
        >
          Missions
        </button>
        <button
          onClick={() => {
            setTab('history');
            setIsOpen(false);
          }}
        >
          History
        </button>
        <button onClick={() => setTab('')} />
      </div>
    </div>
  );
}
