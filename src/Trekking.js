import React from 'react';
import Trekkingdest from './Trekking_destinations.jpg';

function Trekking() {
  return (
    <div className='Trekking-main'>
<img src={Trekkingdest} alt=''/>
<div className='Trekking-secondtitle'><h1><span>Featured Destination</span></h1></div>
    </div>
  )
}

export default Trekking
