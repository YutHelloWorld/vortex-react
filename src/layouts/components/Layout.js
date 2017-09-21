import React from 'react'
import { Container } from 'reactstrap'

import Navbar from '../containers/NavbarContainer'
import './Layout.scss'
import AllRoutes from 'routes'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Container className="text-center page-layout__viewport">
        <AllRoutes />
      </Container>
    </div>
  )
}
