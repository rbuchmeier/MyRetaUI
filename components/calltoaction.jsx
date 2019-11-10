import React, { Component } from 'react';
import Link from 'next/link';


class CallToAction extends Component {
 render() {
   return (
     <div>
      <div className="cta">
       <h3>Join DealBro</h3>
       <p>Powerful tools to market your property for sale to buyers, for deb to lenders, equity sources and least tenants and their brokers.</p>
       <div className="links">
        <Link href="/about"><button>Why Join</button></Link>
        <Link href="/signup"><button>Get Started</button></Link>
       </div>
      </div>
      <style jsx>{`
       .cta {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        background-color: lightgray;
       }
       .links {
        display: grid;
        grid-template-rows: 50% 50%;
       }
       h3 {
        color: #1493c6;
       }
       button {
        background-color: #0577a9;
        color: white;
       }
      `}</style>
     </div>
    )
 }
} export default CallToAction;
