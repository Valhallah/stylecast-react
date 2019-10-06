import React, {Component} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

  class Home extends Component {
    
    render() {
      return (
        <div>
          <h1>Blowoutlook</h1>
          <Link to="/style-quiz">
            <button>
            take the quiz
            </button>
            </Link>
        </div>
      );
    };
  }

export default(Home);


