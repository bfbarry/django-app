import React, { useState, useEffect } from 'react';
import {
  Link,
  useParams
  } from "react-router-dom";

export default function Bucket() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [bucket, setBucket] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`/bucket/${id}`)
    // fetch(`http://127.0.0.1:8000/bucket/${id}`)

    .then(res => res.json())
    .then(
      (data) => {
        setIsLoaded(true);
        setBucket(data);
      },
      (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
  }, [id])

  const [NisLoaded, NsetIsLoaded] = useState(false);
  const [Nerror, NsetError] = useState(null);
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    fetch(`/bucket/all`)
    .then(res => res.json())
    .then(
      (data) => {
        NsetIsLoaded(true);
        setBuckets(data);
      },
      (error) => {
      NsetIsLoaded(true);
      NsetError(error);
      }
    )
  }, [])

  return(
    <div>
      <pre>{JSON.stringify(bucket)}</pre>
      <ul>
        <p>My Buckets</p>

        {buckets.buckets && buckets.buckets.map (function (b) {
            var bcolor = (b.id == id) ? '#32a852' : 'rgb(140, 98, 199)';
            return <Link to={`/bucket/${b.id}`}  className="btn btn-sm" style={{color:'white', backgroundColor:bcolor, marginLeft:'5px'}} key={b.id}> {b.title}</Link>
        })}
        </ul>
    </div>
  )
}