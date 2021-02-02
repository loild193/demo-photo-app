import React, { Suspense } from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss'
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading 99%...</div>}>
        <Router>
          <Header />

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
