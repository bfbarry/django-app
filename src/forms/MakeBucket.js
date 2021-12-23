import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useAuthState } from '../store/UserContext';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import '../App.css';

export default function CreateProject(props) {
  /* Form for creating project
  Renders different inputs depending on which project category is selected  */

  const user = useAuthState();
  const [form, setForm] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [output, setOutput] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/forms/create_project`)
    .then(res => res.json())
    .then(
      (data) => {
      setIsLoaded(true);
      setForm(data);
      },
      (error) => {
      setIsLoaded(true);
      setError(error);
      }
    )
    }, [])
  
  function handleChange(e) {
    /* setState function */
    const {name, value} = e.target;
    setOutput(prevOutput => ({
      ...prevOutput,
      [name]: value
    }))
  }
  
  async function submitHandler(e) {
    // post request
    e.preventDefault()
    try {
      let creators_arr = output.creators.split(',').map(el => el.trim());
      output.creators = creators_arr
      let tag_arr = output.tags.split(',').map(el => el.trim());
      output.tags = tag_arr; // BAD... but setOutput is literally not setting state?
      let wp_arr = output.wanted_positions.split(',').map(el => el.trim());
      output.wanted_positions = wp_arr; // BAD... but setOutput is literally not setting state?
    } catch (e) { } //do nothing 
    const opts = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${user.token}`
      }),
      body: JSON.stringify(output)
    }
    fetch('/api/project/create', opts)
      .then(res => {
        if (res.status === 200) return res.json()
        else return (<p>error</p>)
      })
      .then(data => {
        history.replace(`/project/${data.id}`)
        })
      .catch(error => {
        console.error("error", error)
      } )
  }

  return ( //useref here?
    <div > 
    {/* onSubmit={submitHandler}  */}
      <div>
        <label htmlFor='name'> {form.name && form.name.label} </label> 
        <input type='text' 
              name='name'
              maxLength={form.name && form.name.maxlength}
              value={output.name || ''}
              onChange={handleChange}/> 
      </div>
      <div>
        <label htmlFor='category'> {form.category && form.category.label} </label>
        <select name='category'
              onChange={handleChange}
              value={output.category || ''}>
          {form.category && form.category.options.map(opt => (
            <option key={opt} > {opt} </option>
          ))}
        </select> 
      </div>
      <div>
        <label htmlFor='descr'> {form.descr && form.descr.label} </label> 
        <textarea name='descr'
              maxLength={form.descr && form.descr.maxlength}
              value={output.descr || ''}
              onChange={handleChange}/> 
      </div>
      
      <div>
        <label htmlFor='tags'> Tags: </label> 
        <input type='text' 
              name='tags'
              value={output.tags || ''}
              onChange={handleChange}/> 
      </div>
      
    <button className='btn-lg btn-success' onClick={submitHandler}>Create Bucket List!</button>
    </div>
  )
}

