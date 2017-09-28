import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { signOut } from 'store/fakeAuth'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
