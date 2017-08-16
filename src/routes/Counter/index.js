import { injectReducer } from '../../store/reducers'
import { store } from '../../main'
import Counter from './containers/CounterContainer'
import reducer from './modules/counter'

// 加载时注入reducer
injectReducer(store, { key: 'counter', reducer })

export default Counter
