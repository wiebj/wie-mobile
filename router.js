import React, { PropTypes } from 'react'
import { Router } from 'dva/router'
import App from './routes/app'

const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('./routes/map') })
        }, 'map')
      },
      childRoutes: [
          {
              path: 'upload',
              name: 'upload',
              getComponent (nextState, cb) {
                  require.ensure([], require => {
                      cb(null, require('./routes/upload'))
                  }, 'upload')
              },
          },{
              path: 'map',
              name: 'map',
              getComponent (nextState, cb) {
                  require.ensure([], require => {
                      cb(null, require('./routes/map'))
                  }, 'map')
              },
          },{
              path: 'chart',
              name: 'chart',
              getComponent (nextState, cb) {
                  require.ensure([], require => {
                      cb(null, require('./routes/chart'))
                  }, 'chart')
              },
          },
          {
              path: '*',
              name: 'error',
              getComponent (nextState, cb) {
                  require.ensure([], require => {
                      cb(null, require('./routes/error'))
                  }, 'error')
              },
          },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
