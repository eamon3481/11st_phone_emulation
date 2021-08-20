import Index from '../public/style/index.css';
import App from './App.ts';
import { $ } from './utils/util';
const root = $('#app');
console.log(window.location.pathname);
new App(root);
