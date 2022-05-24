import React from 'react'
import Video from './Video'
import Home from './Home'
import CheckScreen from "./CheckScreen";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
		return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/check/:url" component={CheckScreen} />
            <Route path="/:url" component={Video} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;