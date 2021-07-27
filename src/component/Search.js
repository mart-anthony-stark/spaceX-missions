import React, { useState } from 'react';

export default function Search({ search, setSearch, isEmpty, tab }) {
  var placeholder = 'Search ' + tab + '...';
  return (
    <div className={tab == 'home' ? 'hide' : ''}>
      <input
        id="search"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
