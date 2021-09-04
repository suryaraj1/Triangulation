import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import HypotCalculator from './pages/HypotCalculator/HypotCalculator';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hypotenuse-calculator" component={HypotCalculator} />
            </Switch>
        </Router>
    )
}

export default App;