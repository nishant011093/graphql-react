import React from 'react';
import './App.css';
import ContinentSelect from "./components/continentSelect";
import Continent from "./components/continent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ContinentSelect}/>
      <Route path="/continent" component={Continent} />
    </Router>
  );
}

export default App;
