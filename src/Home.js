import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
          <button><Link to='/signUp'>Signup</Link></button>
      <button><Link to='/Login'>Login</Link></button>
      <button><Link to='/Destination'>Destination</Link></button>
      <button><Link to='/Trekking'>Trekking</Link></button>
     <button><Link to='/Mountaineering'>Mountaineering </Link></button>
      <button><Link to='/Travel'>Travel</Link></button>
      <button><Link to='/unexplored'>unexplored</Link></button>
    </div>
  )
}

export default Home
