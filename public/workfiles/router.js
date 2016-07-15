import React from 'react';
import { Route, IndexRoute } from 'react-router';

import app from './components/app';
import MapPage from './containers/map_page';

export default (
<Route path="/" component={app}>
  <IndexRoute component={MapPage} />
  {/*<Route path="" component={tobefilled} />*/}
</Route>
);
