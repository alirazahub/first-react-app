import React from 'react'
import {Route, Switch} from "react-router-dom";
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';

const App =()=> {
  return (
    <>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path ="/about" component={About} />
      <Route path ="/contact" component={Contact} />
      
    </Switch>
    </>
  );
}

export default App;