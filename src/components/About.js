import React from 'react'
import Rainbow from '../hoc/Rainbow'
const About = () => {
  return (
    <div className='container'>
    <h4 className="center">Petabyte Is a Lot of Data</h4>
    <p>One Petabyte (PB) = 1024 (TB). To put this in perspective, a 50PB hard drive could hold the entire written works of mankind from the beginning of recorded history in all languages.</p>
    </div>
  )
}

export default Rainbow(About)