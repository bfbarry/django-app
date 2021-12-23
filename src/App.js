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
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [buckets, setBuckets] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`/bucket/all`)
    .then(res => res.json())
    .then(
      (data) => {
        setIsLoaded(true);
        setBuckets(data);
      },
      (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
  }, []) //should id be passed in here?
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
        <ul>
        <p>My Buckets</p>

        {buckets.buckets && buckets.buckets.map (b => (
            <Link to={`/bucket/${b.id}`}  className="btn btn-sm" style={{color:'white', backgroundColor:'rgb(140, 98, 199)', marginLeft:'5px'}} key={b.id}> {b.title}</Link>
            ))}
        </ul>
      </Router>
    </div>
  );
}