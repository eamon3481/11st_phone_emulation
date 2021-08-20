import { $all } from '../utils/util';

export default class Component {
 $state;
 constructor($target, $props = {}) {
  this.$target = $target;
  this.$props = $props;
  this.component = [];
  this.setup();
  this.setEvent();
  this.render();
 }
 setup() {}
 template() {
  return '';
 }

 setComponent(component , key = 0, props = {}) {
  this.component.push({ component, props, key });
  return `<div data-key=${key} data-component=${component.name}></div>`;
 }

 mounted() {
  if (this.component.length) {
   this.component.forEach(({ component, props, key }) => {
    const selector = `[data-component="${component.name}"]`;
    new component($all(selector, this.$target)[key], props);
   });
  }
 }

 render() {
  console.log(this.template());
  this.$target.innerHTML = this.template();
  this.mounted();
 }

 setEvent() {}

 setState(newState) {
  this.$state = { ...this.$state, ...newState };
  this.render();
 }
}
