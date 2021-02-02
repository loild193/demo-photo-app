import React, { Suspense } from "react";
import { Link, Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss'
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading 99%...</div>}>
        <Router>
          <ul>
            <li><Link to="/photos">Go to photo page</Link></li>
            <li><Link to="/photos/add">Go to Add new photo page</Link></li>
            <li><Link to="/photos/123">Go to Edit photo page</Link></li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
