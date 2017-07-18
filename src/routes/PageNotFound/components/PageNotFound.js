import React from 'react'
import PropTypes from 'prop-types'
import NotFoundImage from '../assets/404.jpg'
import './PageNotFound.scss'
import { withRouter } from 'react-router'

const PageNotFound = ({ router : { goBack } }) => (
  <div className='not-found__container'>
    <p>Page not found!!!</p>
    <h3>
      <a className='link' onClick={goBack}>Back</a>
    </h3>
    <img className='img-fluid' src={NotFoundImage} />
  </div>
)

PageNotFound.propTypes = {
  router : PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
