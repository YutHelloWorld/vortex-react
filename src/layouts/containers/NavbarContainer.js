import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { signOut } from 'store/fakeAuth'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  signOut
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
