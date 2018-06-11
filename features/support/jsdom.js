/* eslint-disable prefer-reflect */

import { JSDOM } from 'jsdom';

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

/* eslint-disable no-undef */
global.navigator = {
  userAgent: 'node.js',
};

function setupDom() {
  const { window } = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = window;
  global.document = window.document;
  copyProps(window, global);
}

setupDom();

export default setupDom;
