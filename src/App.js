import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import Index from './pages/Index';
import Bucket from './pages/Bucket';
import Test from './pages/Test';

export default function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar user={user} dispatch={dispatch} notifCount={notifCount}/> */}
      <h1>BucketList</h1>
        
        <Routes>
          <Route 
            exact path='/'
            element={<Index/>} />
          <Route 
            path='/bucket/:id'
            element={<Bucket/>} />
        </Routes>
      </Router>
    </div>
  );
}