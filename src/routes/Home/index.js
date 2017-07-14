import { injectReducer } from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
      const Home = require('./containers/HomeContainer').default
      const reducer = require('./modules/home').default
      injectReducer(store, { key: 'home', reducer })
      cb(null, Home)
  }
})