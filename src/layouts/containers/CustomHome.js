import React from 'react';
import { func } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import { AsyncHome, AsyncZen } from '../../routes';
import { signOutWithCb } from '../../store/fakeAuth';

const propTypes = {
  signOut: func.isRequired
};

export function CustomHome({ signOut }) {
  return (
    <div>
      <Navbar signOut={signOut} />
      <Container className="text-center page-layout__viewport">
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/zenPage" component={AsyncZen} />
        </Switch>
      </Container>
    </div>
  );
}

CustomHome.propTypes = propTypes;

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signOut: signOutWithCb
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHome);
