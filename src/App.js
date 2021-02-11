import productApi from "api/productApi";
import SignIn from "features/Auth/pages/SignIn";
import React, { Suspense, useEffect } from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss'
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import firebase from 'firebase';
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { getMe } from "app/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const Photo = React.lazy(() => import('./features/Photo'))

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

function App() {
  const dispatch = useDispatch();

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

  // Handle firebase login
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        // user logs out, handle something
        console.log('User is not logged in');
        return;
      }
      // get me when signed in
      try {
        const actionResult = await dispatch(getMe());
        const currentUser = unwrapResult(actionResult);
        console.log('current user: ', currentUser);
      } catch (error) {
        console.log('Error: ', error.message);
      }
    });
    // Make sure we un-register Firebase observers when the component unmounts.
    return () => unregisterAuthObserver(); 
  }, [dispatch]);

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading 99%...</div>}>
        <Router>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
