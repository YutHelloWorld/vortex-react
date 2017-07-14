import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'zen',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Zen = require('./containers/ZenContainer').default
      const reducer = require('./modules/zen').default
      injectReducer(store, { key: 'zen', reducer })
      cb(null, Zen)
    })
  }
})
