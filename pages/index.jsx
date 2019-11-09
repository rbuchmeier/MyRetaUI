import React, { Component } from 'react';
import Header from '../components/header.jsx';
import Search from '../components/search.jsx';
import Main from '../components/main.jsx';
import Footer from '../components/footer.jsx';


class Index extends Component {
 render() {
   return (
     <div>
      <Header />
      <Search />
      <Main />
      <Footer />
     </div>
    )
 }
} export default Index;
