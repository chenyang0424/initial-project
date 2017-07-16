import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'Help',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'Help', reducer })
      cb(null, Counter)
    }, 'Help')
  }
})
