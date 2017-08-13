import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/counter'

import Counter from '../components/Counter'

/* 将action传入展示组件，作为props */
const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

/* 将state传入展示组件，作为props */
const mapStateToProps = (state) => ({
  counter: state.counter
})

/* 容器组件 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
