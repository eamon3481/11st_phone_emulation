import Index from '../public/style/index.css';
import App from './App.ts';
import { $ } from './utils/util';
const root = $('#app');
try {
  new App({ tagName: 'div' }, {}).CreateEl(root);
} catch (e) {
  console.dir(e);
  new App({ tagName: 'div' }, {}).CreateEl(root);
}
