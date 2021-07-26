import React, { useState } from 'react';

export default function Search({ search, setSearch, isEmpty }) {
  return (
    <div>
      <input
        id="search"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search Missions..."
      />
    </div>
  );
}
