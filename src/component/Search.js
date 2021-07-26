import React, { useState } from 'react';

export default function Search({ search, setSearch, isEmpty, tab }) {
  var placeholder = 'Search ' + tab + '...';
  return (
    <div>
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
