import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'Counter4',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'Counter4', reducer })
      cb(null, Counter)
    }, 'Counter4')
  }
})
