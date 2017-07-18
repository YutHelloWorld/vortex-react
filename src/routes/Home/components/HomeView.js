import React from 'react'
import bgImage from '../assets/bgImage.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <img alt='vortex!' className='vortex img-fluid' src={bgImage} />
  </div>
)

export default HomeView
