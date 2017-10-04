import React from 'react'
import { bool } from 'prop-types'
import Spinner from 'react-spinkit'

const propTypes = {
  isLoading: bool,
  timedOut: bool,
  pastDelay: bool,
  error: bool
}
function Loading(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return 'Loader timed out!'
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return <Spinner name="cube-grid" color="purple" style={{ margin: 'auto' }} />
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null
    }
  } else if (props.error) {
    // If we aren't loading, maybe
    return 'Error! Component failed to load'
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null
  }
}

Loading.propTypes = propTypes

export default Loading
