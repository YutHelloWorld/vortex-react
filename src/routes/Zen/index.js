import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'zen',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Zen = require('./containers/ZenContainer').default
      /*  Add the reducer to the store on key 'zen'  */
      const reducer = require('./modules/zen').default
      injectReducer(store, { key: 'zen', reducer })
      cb(null, Zen)
    })
  }
})
