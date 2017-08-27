import React from 'react'
import sky from '../assets/sky.jpg'
import './HomeView.scss'

export function HomeView() {
  return (
    <div>
      <img alt="sky" className="bg img-fluid" src={sky} />
    </div>
  )
}

export default HomeView
