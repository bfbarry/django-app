import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  useParams,
  useHistory,
  Link
} from "react-router-dom";
import Index from './pages/Index';
import Bucket from './pages/Bucket';

export default function App() {

  
  return (
    <div className="App">
      <Router>
        {/* <NavBar user={user} dispatch={dispatch} notifCount={notifCount}/> */}
      <Link to='/'>
        <h1>BucketList</h1>
      </Link>
        
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