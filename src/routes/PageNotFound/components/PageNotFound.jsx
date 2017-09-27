import React from 'react'
import { object } from 'prop-types'
import NotFoundImage from '../assets/404.jpg'
import './PageNotFound.scss'
import { withRouter } from 'react-router'
import { Button } from 'reactstrap'

const propTypes = {
  history: object.isRequired,
}

function PageNotFound({ history: { goBack } }) {
  return (<div className="not-found__container">
    <p>Page not found!!!</p>
    <div>
      <Button
        color="link"
        className="back"
        onClick={goBack}
      >
        Back
      </Button>
    </div>
    <img
      className="img-fluid"
      src={NotFoundImage}
    />
  </div>)
}

PageNotFound.propTypes = propTypes

export default withRouter(PageNotFound)
