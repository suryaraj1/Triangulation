import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AreaCalculator from './pages/AreaCalculator/AreaCalculator';
import Home from './pages/Home/Home';
import HypotCalculator from './pages/HypotCalculator/HypotCalculator';
import IsTriangle from './pages/IsTriangle/IsTriangle';
import TriangleQuiz from './pages/TriangleQuiz/TriangleQuiz';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hypotenuse-calculator" component={HypotCalculator} />
                <Route exact path="/area-calculator" component={AreaCalculator} />
                <Route exact path="/is-triangle" component={IsTriangle} />
                <Route eaxct path="/triangle-quiz" component={TriangleQuiz} />
            </Switch>
        </Router>
    )
}

export default App;