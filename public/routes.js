import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MapPage from './containers/map_page';

export default (
<Route path="/" component={App}>
  <IndexRoute component={MapPage} />
  {/*<Route path="posts/new" component={tobefilled} />*/}
</Route>
);
