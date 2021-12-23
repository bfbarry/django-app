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
  }, [id]) //should id be passed in here?
  return(
    <div>
      <pre>{JSON.stringify(bucket)}</pre>
    </div>
  )
}