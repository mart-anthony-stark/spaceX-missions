import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <p>Created By: Mart Anthony A. Salazar</p>
        <a href="https://github.com/mart-anthony-stark" target="_blank">
          <i class="fa fa-github" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/mart-anthony-salazar-420ba81b6/"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
      </div>
      <p>&copy;All rights reserved.</p>
      <p>Api used: https://api.spacexdata.com/v3/missions</p>
    </div>
  );
}
