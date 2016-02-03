/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <ul className="Navigation" role="menu">
      <li className="Navigation-item">
        <a className="Navigation-link" href="/" onClick={Link.handleClick}>Me</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/process" onClick={Link.handleClick}>Process</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/casestudies" onClick={Link.handleClick}>Case studies</a>
      </li>
      <li className="Navigation-item">
        <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;
