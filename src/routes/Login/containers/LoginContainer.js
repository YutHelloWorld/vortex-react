import { connect } from 'react-redux'
import Login from '../components/Login'
import { authenticateWithCb } from 'store/fakeAuth'

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = {
  authenticateWithCb,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
