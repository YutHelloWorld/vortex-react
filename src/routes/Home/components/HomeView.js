import React from 'react'
import VortexImage from '../assets/vortex.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h1>Welcome!</h1>
    <img alt='vortex!' className='vortex img-fluid' src={VortexImage} />
  </div>
)

export default HomeView
