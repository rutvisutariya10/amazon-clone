import React, { useEffect } from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider.js";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout"
            element={
              [
              <Header />,
              <Checkout/>
              ]} 
          />
          <Route path="/login"
            element={
              [
              <Login />
              ]} 
          />
          <Route path="/"
            element={
              [
              <Header />,
              <Home />
              ]} 
          />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
