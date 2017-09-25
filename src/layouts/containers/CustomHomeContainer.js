import { connect } from 'react-redux'
import CustomHome from '../components/CustomHome'
import { signOut } from 'store/fakeAuth'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHome)
