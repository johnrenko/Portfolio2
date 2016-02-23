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
  	    	<div className="content">   
          		<h1>Me</h1>
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
