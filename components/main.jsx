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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. A cras semper auctor neque vitae. Sed vulputate mi sit amet mauris commodo quis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Eu nisl nunc mi ipsum faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Auctor elit sed vulputate mi sit amet mauris. Turpis cursus in hac habitasse platea dictumst. Sed augue lacus viverra vitae. Ipsum dolor sit amet consectetur adipiscing elit. Et magnis dis parturient montes nascetur ridiculus. Consequat interdum varius sit amet mattis.</p>
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
