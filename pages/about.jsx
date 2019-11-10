import React, { Component } from 'react';
import Router from 'next/router';


class About extends Component {
 render() {
   return (
     <div>
      <button onClick={() => Router.back()}>Go Back</button>
     </div>
    )
 }
} export default About;
