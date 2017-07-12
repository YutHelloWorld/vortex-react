import React from 'react'
import VortexImage from '../assets/vortex.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={VortexImage} />
  </div>
)

export default HomeView
