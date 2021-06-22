import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/create-post">
                        <Create />
                    </Route>
                    <Route path="/update-post/:id">
                        <Update />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
