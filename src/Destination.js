import React from 'react'
import { Link } from 'react-router-dom';
import Travel from './Travel.jpg';
import Trekking from './Trekking.jpg';
import Mountain from './Mountain.jpg';
import './Destination.css';

function Destination() {
  return (
    <div className='Destination-main'>
      <h1 className='Destination-title'>
        <span>Destination</span>
      </h1>
      <div className='Destination-Headers'>
        <div className='Destination-trekking'>
            <span>Trekking Destinations</span>
            <img src={Trekking} alt=''/>
            <p className='Destination-paragraph'>Trekking lauda lasun asjknanfdns ip bod</p>
            <button type='submit'><Link to='/Trekking'>Explore</Link></button>
        </div>
        <div className='Destination-trekking'>
            <span>Travel Destinations</span>
            <img src={Travel} alt=''/>
            <p className='Destination-paragraph'>Travelling lauda lasun asjknanfdns ip bod</p>
            <button type='submit'><Link to='/Travel'>Explore</Link></button>
        </div>
        <div className='Destination-trekking'>
            <span>Mountain climbing Destinations</span>
            <img src={Mountain} alt=''/>
            <p className='Destination-paragraph'>Mountain climbing lauda lasun asjknanfdns ip bod</p>
            <button type='submit'><Link to='/Mountainclimbing'>Explore</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Destination
