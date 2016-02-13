/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Navigation from '../Navigation';

function Layout({ children }) {

  return (
  	<div>
  	<Navigation/>
	    <div className="Layout">
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={1}>
        {(typeof location != "undefined")
    		   ? React.cloneElement(children, {
              key : location.pathname
              })
           : React.cloneElement(children, {
              key : "/"
              })
        }
        </ReactCSSTransitionGroup>
	    </div>
    </div>
  );

}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
