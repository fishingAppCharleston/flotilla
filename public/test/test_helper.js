import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM form 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './workfiles/reducers';

//set up testing env to run on cl
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.window = global.document.defaultView;
const $ = jquery(global.window);

//renders components for tests
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
  <Provider store={createStore(reducers)}>
    <ComponentClass />
  </Provider>
  );
  //returns html
  return $(ReactDOM.findDOMNode(componentInstance));
}

export { renderComponent, expect };
