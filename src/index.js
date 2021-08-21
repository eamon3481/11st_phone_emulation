import Index from '../public/style/index.css';
import App from './App.ts';
import { $ } from './utils/util';
const root = $('#app');

new App({ tagName: 'div' }, {}).CreateEl(root);
