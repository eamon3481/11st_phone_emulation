import Alert from '@src/page/Alert';
import Home from '@src/page/Home';
import Memo from '@src/page/Memo';
import Photo from '@src/page/Photo';

const routes = {
  '/': Home,
  '/alert': Alert,
  '/memo': Memo,
  '/photo': Photo,
};

// entry point
export function initialRoutes(el) {
  renderHTML(el, routes['/']);
  console.log(window);
  window.onpopstate = (e) => {
    console.log('dd');
    return renderHTML(el, routes[window.location.pathname]);
  };
}

// set browser history
export function historyRouterPush(pathName, el) {
  window.onpopstate = (e) => {
    return renderHTML(el, routes[window.location.pathname]);
  };
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(el, routes[pathName]);
}

// render
function renderHTML(el, route) {
  new route(el);
}
