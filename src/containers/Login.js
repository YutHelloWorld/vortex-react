import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { connect } from 'react-redux';

import { signInWithCb } from '../store/fakeAuth';

const propTypes = {
  signInWithCb: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  logged: PropTypes.bool.isRequired
};

export function Login({ location, logged, signInWithCb }) {
  const { from } = location.state || { from: { pathname: '/' } };
  return logged ? (
    <Redirect to={from} />
  ) : (
    <Container className="text-center page-layout__viewport">
      <p>You must log in to view the page at {from.pathname}</p>
      <Button color="primary" onClick={signInWithCb}>
        Log in
      </Button>
    </Container>
  );
}

Login.propTypes = propTypes;

const mapStateToProps = state => ({
  logged: state.logged
});

const mapDispatchToProps = {
  signInWithCb
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
