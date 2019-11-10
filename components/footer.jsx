import React, { Component } from 'react';


class Footer extends Component {
 render() {
   return (
     <div>
      <div className="footer">
       <div className="innerfooter">
        <h2>DealBro</h2>
        <div>Dallas</div>
        <div>Houston</div>
        <div>NYC</div>
        <div>Boston</div>
        <div>Denver</div>
        <div>Los Angeles</div>
        <div>Fort Worth</div>
        <div>Austin</div>
        <div>Seattle</div>
        <div>Miami</div>
        <div>Tampa</div>
        <div>Orlando</div>
       </div>
       <div className="bottomfooter">
        <a href="https://github.com/mariomarine/MyRetaUI">Github Repo</a>
       </div>
      </div>
      <style jsx>{`
       .innerfooter {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 1fr 1fr 1fr;
        grid-auto-flow: column;
        color: white;
        background-color: #29aae1;
       }
       h2 {
        grid-column:1;
        grid-row:1 / 4;
       }
       .bottomfooter {
        background-color: #2188b4;
       }
      `}</style>
     </div>
    )
 }
} export default Footer;
