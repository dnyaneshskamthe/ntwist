// Home.js
import React from 'react';
import Header from './Header';
import Content from './Content';

const Home = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Content />
    </div>
  );
}

export default Home;
