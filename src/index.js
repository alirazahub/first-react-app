import React from 'react';
import { createRoot } from 'react-dom/client';  //REACT DOM
import './index.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Components/Error';
import About from './Components/About';
import Services from './Components/Services';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";




const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/:opt1/:opt2">
                    <Error />
                </Route>
                <Route path="/:opt1">
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </div>
    </Router>
);