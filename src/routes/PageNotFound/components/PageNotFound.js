import React from 'react'
import PropTypes from 'prop-types'
import NotFoundImage from '../assets/404.jpg'
import classes from './PageNotFound.scss'
import { withRouter } from 'react-router'

const PageNotFound = ({ router : { goBack } }) => (
  <div className={classes.container}>
    <h1>Page not found!!!</h1>
    <h3>
      <a className={classes.link} onClick={goBack}>Back</a>
    </h3>
    <img src={NotFoundImage} />
  </div>
)

PageNotFound.propTypes = {
  router : PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
