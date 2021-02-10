import productApi from "api/productApi";
import React, { Suspense, useEffect } from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss'
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const Photo = React.lazy(() => import('./features/Photo'))

function App() {

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();
  }, []);

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
