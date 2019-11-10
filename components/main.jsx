import React, { Component } from 'react';
import CallToAction from './calltoaction.jsx';


class Main extends Component {
 render() {
   return (
     <div>
      <div className="cta">
       <div className="cta2">
        <CallToAction className="foobar"/>
       </div>
       <div className="main">
        <h2>Virtual Real Estate Assistant</h2>
        <p>DealRep is a crowd-sourced, self-administered Commercial Real Estate site. This allows for transparency to the industry and value for the users. Since the users are adding and editing the information instead of paid help, the accuracy is enhanced, the cost is kept low and the information is “owned” by the users instead of by DealRep.</p>
        <p>DealRep features a people social networking application that allows for networking with peers but also has the ability to network with properties to track and be notified of additions or edits from other users. You have the ability to set your notifications to see if anyone changes data you haven’t confirmed to make certain of the quality of the information in your properties.</p>
        <button>Read More</button>
       </div>
      </div>
      <style jsx>{`
       .cta {
        display: grid;
        justify-items: center;
        margin-top: 20px;
       }
       .cta2, .main {
        width: 50%;
       }
       .main {
        display: grid;
        justify-items: center;
       }
       h2 {
        color: #1493c6;
       }
       button {
        background-color: #1493c6;
        color: white;
       }
      `}</style>
     </div>
    )
 }
} export default Main;
