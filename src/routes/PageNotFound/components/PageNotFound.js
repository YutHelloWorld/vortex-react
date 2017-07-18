import React from 'react'
import PropTypes from 'prop-types'
import NotFoundImage from '../assets/404.jpg'
import './PageNotFound.scss'
import { withRouter } from 'react-router'
import { Button } from 'reactstrap'

const PageNotFound = ({ router : { goBack } }) => (
  <div className='not-found__container'>
    <p>Page not found!!!</p>
    <div>
      <Button color='link' className='back' onClick={goBack}>Back</Button>
    </div>
    <img className='img-fluid' src={NotFoundImage} />
  </div>
)

PageNotFound.propTypes = {
  router : PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
