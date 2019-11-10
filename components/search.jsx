import React, { Component } from 'react';


class Search extends Component {
 render() {
   return (
     <div>
      <div className="search">Search for Properties</div>
      <style jsx>{`
       .search {
        display: grid;
        justify-items: center;
        background-color: gray;
       }
      `}</style>
       
     </div>
    )
 }
} export default Search;
