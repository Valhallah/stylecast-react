import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import Home from './components/Home';
import StyleQuiz from './components/StyleQuiz';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/style-quiz" component={StyleQuiz} />
      </Switch>
    </Router>
    // <div>
    // <Quiz />
    // <Home />
    // </div>
  );
}

export default App;
