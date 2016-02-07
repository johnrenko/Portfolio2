/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Navigation.scss';
import Link from '../Link';
import Location from "../../core/Location";

class Navigation extends Component {

  render() {
    return (
      <ul className="Navigation" role="menu">
        <li className="Navigation-item">
          <a className={`${location.pathname === "/" ? "active" : ""} Navigation-link`} href="/" onClick={Link.handleClick}>Me</a>
        </li>
        <li className="Navigation-item">
          <a className={`${location.pathname === "/process" ? "active" : ""} Navigation-link`} href="/process" onClick={Link.handleClick}>Process</a>
        </li>
        <li className="Navigation-item">
          <a className={`${location.pathname === "/casestudies" ? "active" : ""} Navigation-link`} href="/casestudies" onClick={Link.handleClick}>Case studies</a>
        </li>
        <li className="Navigation-item">
          <a className={`${location.pathname === "/contact" ? "active" : ""} Navigation-link`} href="/contact" onClick={Link.handleClick}>Contact</a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
