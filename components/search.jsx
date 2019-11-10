import React, { Component } from 'react';


class Search extends Component {
 render() {
   return (
     <div>
      <div className="search">
       <div className="searchcontainer">
        <p className="p-white"><b>Properties</b> Brokers</p>
        <div className="searchtool">
        </div>
        <div className="stats">
         <div className="stat">
          <p className="p-lightblue">79,000+</p>
          <p className="p-white">Properties</p>
         </div>
         <div className="stat">
          <p className="p-lightblue">94,000+</p>
          <p className="p-white">Transactions</p>
         </div>
         <div className="stat">
          <p className="p-lightblue">228,800+</p>
          <p className="p-white">Occupancy Records</p>
         </div>
        </div>
       </div>
      </div>
      <style jsx>{`
       .search {
        display: grid;
        justify-items: center;
        background-color: gray;
       }
       .searchtool {
        width: 100%;
        height: 100px;
        border-radius: 25px;
        background-color: rgb(42, 162, 214);
       }
       .stats {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
       }
       .p-lightblue {
        color: rgb(42, 162, 214);
       }
       .p-white {
        color: white;
       }
       .searchcontainer > p {
        margin-left: 25px;
       }
      `}</style>
       
     </div>
    )
 }
} export default Search;
