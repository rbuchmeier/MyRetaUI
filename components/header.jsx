import React, { Component } from 'react';


class Header extends Component {
 render() {
   return (
     <div>
      <div className="header">
       <h1>DealBro</h1>
      </div>
      <style jsx>{`
       .header {
        display:grid;
        justify-items: center;
       }
      `}</style>
     </div>
    )
 }
} export default Header;
