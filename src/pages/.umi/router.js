import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/course",
    "component": require('../course').default,
    "exact": true
  },
  {
    "path": "/found",
    "component": require('../found').default,
    "exact": true
  },
  {
    "path": "/school",
    "component": require('../found').default,
    "exact": true
  },
  {
    "path": "/grade",
    "component": require('../found').default,
    "exact": true
  },
  {
    "path": "/team",
    "component": require('../found').default,
    "exact": true
  },
  {
    "path": "/create",
    "component": require('../create').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('../index').default,
    "exact": true
  },
  {
    "component": () => React.createElement(require('/mnt/d/linux_code/Laputa-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
