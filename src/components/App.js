import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './../styles/App.css'; // Assuming the CSS is already in place

// Home page component
const Home = () => {
  return <h1>Welcome to the Home page!</h1>;
};

// About page component
const About = () => {
  return <h1>This is an application that demonstrates React Router.</h1>;
};

// Main App component
const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Routing between Home and About pages */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
