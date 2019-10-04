import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
    // <div>
    // <Quiz />
    // <Home />
    // </div>
  );
}

export default App;
