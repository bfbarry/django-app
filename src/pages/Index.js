import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [buckets, setBuckets] = useState([]);

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
  }, [])

  return(
    <div>
      <h2>Make your dreams come true.</h2>
      <ul>
        <p>My Buckets</p>

        {buckets.buckets && buckets.buckets.map (function (b) {
            return <Link to={`/bucket/${b.id}`}  className="btn btn-sm" style={{color:'white', backgroundColor:'rgb(140, 98, 199)', marginLeft:'5px'}} key={b.id}> {b.title}</Link>
        })}
        </ul>
    </div>
  )
}