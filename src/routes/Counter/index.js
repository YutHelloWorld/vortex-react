import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter',
  /*  Async getComponent */
  getComponent (nextState, cb) {
    /* coding split */
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key : 'counter', reducer })

      cb(null, Counter)
    }, 'counter')
  }
})
