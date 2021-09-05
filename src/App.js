import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AreaCalculator from './pages/AreaCalculator/AreaCalculator';
import Home from './pages/Home/Home';
import HypotCalculator from './pages/HypotCalculator/HypotCalculator';
import IsTriangle from './pages/IsTriangle/IsTriangle';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hypotenuse-calculator" component={HypotCalculator} />
                <Route exact path="/area-calculator" component={AreaCalculator} />
                <Route exact path="/is-triangle" component={IsTriangle} />
            </Switch>
        </Router>
    )
}

export default App;