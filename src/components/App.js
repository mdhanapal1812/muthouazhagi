import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing.js";
import Header from "./Header";
import Contact from "./Contact";
import Portfolio from "./Portfolio.js";
import Resume from "./Resume";
import About from "./About";
import Image from "./Image";
import CookBook from "./CookBook";
import BostonHousing from "./BostonHousing";
import history from "./History";
import Apartment from "./Apartment";

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history} r>
        <Header />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/portfolio' forceRefresh exact component={Portfolio} />

          <Route path='/image' exact component={Image} />
          <Route path='/cookbook' exact component={CookBook} />
          <Route path='/bostonhousing' exact component={BostonHousing} />
          <Route path='/apartment' exact component={Apartment} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
