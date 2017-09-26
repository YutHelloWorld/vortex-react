import { connect } from 'react-redux'
import Login from '../components/Login'
import { authenticateWithCb } from 'store/fakeAuth'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  authenticateWithCb,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
