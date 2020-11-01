import React from 'react';
import './AppC.css';
import HomeS  from './components/HomeS';
import HomeClg  from './components/HomeClg';
import HomeBsn  from './components/HomeBsn';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function AppC() {
  return (
    <div className="app">
        {/* <Link to="app-c">
          <HomeClg />
        </Link> */}
       <Router>
         {/* <HomeS /> */}
         <HomeClg />
         {/* <HomeBsn /> */}
         {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default AppC;