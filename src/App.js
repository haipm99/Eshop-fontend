import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//component
import Login from './components/auth/login';
import Register from './components/auth/register';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
