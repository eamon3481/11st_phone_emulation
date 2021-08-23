import routes, { routeType } from '@src/route';

import Component from './Component';
import { constructorType } from './componentLibType';

const routeKey = Object.keys(routes) as Array<keyof typeof routes>;

export const checkRouteType = (input: any) => {
  for (const keys of routeKey) {
    if (input === keys) return keys;
  }
  throw new Error('Route pathName 를 확인하세요');
};

// entry point
export function initialRoutes(el: HTMLElement) {
  window.onpopstate = (e) => {
    const checkedPath = checkRouteType(window.location.pathname);
    return renderHTML(el, routes[checkedPath]);
  };
  const checkedPath = checkRouteType(window.location.pathname);
  renderHTML(el, routes[checkedPath]);
}

// set browser history
export function historyRouterPush(pathName: keyof routeType, el: HTMLElement) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// render
function renderHTML(el: HTMLElement, route: constructorType<void, Component>) {
  new route({ tagName: 'div' }).CreateEl(el);
}
