import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//component
import Login from './components/auth/login';
import Register from './components/auth/register';
import Owner from './components/owner/main_owner';
//
import './index.css'
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/owner" exact component={Owner} />
            <Route path="/owner/manageShop" exact component={Owner} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
