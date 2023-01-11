import React from 'react';
import cellrLogo from './Cellrlogo.png';



const CellrFrontPage = () => {
  return (
    <div>
      <div className="header">
        <img src={cellrLogo} alt="Cellr logo" className="logo-icon" />
        <div className="sign-in-container">
          <button>Sign In</button>
        </div>
        <div className="search-container">
        <button className="filter-button">Filter</button>
          <input type="text" placeholder="Search Cellars" className="search-bar" />
        </div>
      </div>
      <div className="listings-container">
        <h1>Listings of Cellars for Rent</h1>
        <ul>
          <li>Cellar 1</li>
          <li>Cellar 2</li>
          <li>Cellar 3</li>
        </ul>
      </div>
    </div>
  );
};



export default CellrFrontPage;
