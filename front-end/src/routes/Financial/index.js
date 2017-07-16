import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'Financial',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'Financial', reducer })
      cb(null, Counter)
    }, 'Financial')
  }
})
