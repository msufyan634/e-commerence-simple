import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Collection from "./pages/Collection";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Cards from './ProdustCard/Cards'
import FullCards from './ProdustCard/FullCards'
import HalfCards from './ProdustCard/HalfCards'
import Container from '@material-ui/core/Container';
import "./App.css";

function App() {
  return (
    <>
    <div className="container_fluid">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collection" exact component={Collection} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </Router>
    </div>
    <Container>
    <Cards/> 
    <FullCards/>
    <HalfCards/>
      </Container>
 
    </>
  );
}

export default App;
//https://github.com/briancodex/react-navbar-v1/tree/master/src/components
