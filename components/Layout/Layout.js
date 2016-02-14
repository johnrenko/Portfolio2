/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './animate.scss';
import './Layout.scss';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Navigation from '../Navigation';

function Layout({ children }) {

  return (
  	<div>
    	<Navigation/>
	    <div className="Layout">
        <ReactCSSTransitionGroup transitionName={{appear: "animated", appearActive: "flipInX", leave: "animated",leaveActive: "flipOutX"}} transitionAppear={true} transitionLeave={true} transitionEnter={false}>
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
