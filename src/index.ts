import App from './App';
import { $ } from './utils/util';
import '@public/style/index.css';
import ErrorPage from './Error';
import { historyRouterPush } from './lib/router';

const root = $('#app');
try {
  if (!root) throw new Error('App tag 가 없습니다.');
  new App({ tagName: 'div' }).CreateEl(root);
} catch (e) {
  if(root)historyRouterPush("/error", root)
  console.error('App tag 가 없습니다.')
}
