import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomHome from './CustomHome';
import Login from '../containers/Login';
import PrivateRoute from '../components/PrivateRoute';

const propTypes = {
  logged: PropTypes.bool.isRequired
};

function Layout({ logged }) {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute isAuthenticated={logged} component={CustomHome} />
    </Switch>
  );
}

Layout.propTypes = propTypes;

const mapStateToProps = state => ({
  logged: state.logged
});

export default connect(mapStateToProps)(Layout);
