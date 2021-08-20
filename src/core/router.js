import Home from '@src/page/Home';

const routes = {
  '/': Home,
 // '/alert': Alert,
//  '/memo': Memo,
 // '/photo': Photo,
};

// entry point
export function initialRoutes(el) {
  renderHTML(el, routes['/']);
  window.onpopstate = () => renderHTML(el, routes[window.location.pathname]);
}

// set browser history
export function historyRouterPush(pathName, el) {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// render
function renderHTML(el, route) {
  new route(el);
}
