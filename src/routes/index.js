// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Login from '../layouts/Login'
import HomeRoute from './Home'
import CounterRoute1 from './Edit'
import CounterRoute2 from './Doing'
import CounterRoute3 from './Done'
import CounterRoute4 from './Help'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
	{
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeRoute,
  childRoutes : [
    CounterRoute1(store),
    CounterRoute2(store),
    CounterRoute3(store),
    CounterRoute4(store)
  ]
},{
	path        : '/login',
	component   : Login
}
])

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
