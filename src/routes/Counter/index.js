import { injectReducer } from '../../store/reducers'
import Counter from './containers/CounterContainer'
import reducer from './modules/counter'
import { store } from '../../main'

injectReducer(store, { key : 'counter', reducer })
export default Counter
