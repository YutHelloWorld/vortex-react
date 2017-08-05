import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter',
  /*  动态路由 */
  getComponent (nextState, cb) {
    /* 代码分割 */
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default

      /*  将counterReducer注入rootReducer  */
      injectReducer(store, { key : 'counter', reducer })

      cb(null, Counter)
    }, 'counter')
  }
})
