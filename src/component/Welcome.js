import React from 'react';

export default function Welcome({ info, tab, links }) {
  return (
    <div className={'home ' + (tab == 'home' ? 'show' : 'hide')}>
      <h1 className="logo">
        Space<span>X</span>
      </h1>
      <h4 className="summary">{info.summary}</h4>

      <div className="founder">
        <h3>{info.founder}</h3>
        <p>SpaceX CEO / Founder</p>
      </div>

      <div className="socials">
        <a href={links.website} target="_blank">
          <i class="fa fa-globe" aria-hidden="true" />
          Website
        </a>
        <a href={links.flickr} target="_blank">
          <i class="fa fa-flickr" aria-hidden="true" />
          Flickr
        </a>
        <a href={links.twitter} target="_blank">
          <i class="fa fa-twitter" aria-hidden="true" />
          Twitter
        </a>
        <a href={links.elon_twitter} target="_blank">
          <i class="fa fa-twitter-square" aria-hidden="true" />
          Elon's Twitter
        </a>
      </div>
    </div>
  );
}
