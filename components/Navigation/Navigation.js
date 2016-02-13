/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { propTypes, Component } from 'react';
import './Navigation.scss';
import Link from '../Link';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {loading: true};
  }

  componentDidMount() {
  var self = this;
  setTimeout(() => {
    self.setState({loading: false}); }, 1);
  }

  render() {
    if (this.state.loading) {
        return(
          <div />
        )
      }
    else {
      return(
        <nav className="desktop">
          <ul className="navigation" role="menu">
            <li className={`navigation-item ${location.pathname === "/" ? "active" : ""}`}>
              <a className='navigation-link' href="/" onClick={Link.handleClick}>Me</a>
            </li>
            <li className={`navigation-item ${location.pathname === "/process" ? "active" : ""}`}>
              <a className='navigation-link' href="/process" onClick={Link.handleClick}>Process</a>
            </li>
            <li className={`navigation-item ${location.pathname === "/casestudies" ? "active" : ""}`}>
              <a className='navigation-link' href="/casestudies" onClick={Link.handleClick}>Case studies</a>
            </li>
            <li className={`navigation-item ${location.pathname === "/contact" ? "active" : ""}`}>
              <a className='navigation-link' href="/contact" onClick={Link.handleClick}>Contact</a>
            </li>
            <li className="navigation-line"></li>
          </ul>
        </nav>
        )
      }
  }
}

export default Navigation;
