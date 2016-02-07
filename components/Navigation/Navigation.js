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
        )
      }
  }
}

export default Navigation;
