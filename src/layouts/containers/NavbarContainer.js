import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { signOutWithCb } from 'store/fakeAuth'

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = {
  signOutWithCb
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default withRouter(NavbarContainer)
