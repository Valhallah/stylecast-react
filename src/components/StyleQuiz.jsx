import React, {Component} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Quiz from 'react-quiz-component';
import quiz from '../quizContent/quiz';



  class StyleQuiz extends Component {
    
    render() {
      return (
        <div>
          <h1>Blowoutlook Quiz</h1>

          <Link to="/">
            <button>Home</button>
            </Link>
        </div>
      );
    };
  }

export default(StyleQuiz);