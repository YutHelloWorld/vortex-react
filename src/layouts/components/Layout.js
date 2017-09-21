import React from 'react'
import { Container } from 'reactstrap'

import Navbar from '../containers/NavbarContainer'
import './Layout.scss'
import Routes from 'routes'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Container className="text-center page-layout__viewport">
        <Routes />
      </Container>
    </div>
  )
}
