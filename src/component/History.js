import React, { useState } from 'react';

export default function History({ history, tab }) {
  function formatDate(utcDate) {
    const date = new Date(utcDate);
    return date.toLocaleDateString();
  }

  return (
    <div className="history">
      <h3>{history.title}</h3>
      {formatDate(history.event_date_utc)}
      <p className={history.flight_number ? 'show' : 'hide'}>
        Flight number: {history.flight_number}
      </p>
      <p className={history.details ? 'show' : 'hide'}>
        Details: {history.details}
      </p>
    </div>
  );
}
