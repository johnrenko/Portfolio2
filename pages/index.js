/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
	<div>
		<section>
  	    	<div className="color1">   
            <div className="content">
                  <h1>Me</h1>
            </div>
          </div>
          <svg viewBox="0 0 1280 100" preserveAspectRatio="none" id="header-curve-me" data-reactid=".20qcf4exa80.1.0.$=1$/.0.1">
            <path d="M0,0 C300,300 0,0 0,0 S200,150 1280,0" data-reactid=".20qcf4exa80.1.0.$=1$/.0.1.0"></path>
          </svg>
          <div className="content">
            <div className="box">
                <h2 className="meTitle3">John Dutamby, UX Designer</h2>
                <p>A UX Designer with 5+ years of experience going from research to product design. </p>
                <p>Looking for simple solutions to complex problems, transforming constraints into opportunities. </p>
                <p>I strongly believe that with the right <strong>motivation, communication and organisation</strong>, any team can achieve the best possible outcome. </p>
            </div>
            <div className="boxImg">
            </div>
        	</div>
    </section>
  </div>
    );
  }

}
