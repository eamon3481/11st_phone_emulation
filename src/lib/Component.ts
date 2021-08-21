import { $, $all, createElement } from '../utils/util';
import { createElementType } from '@src/type/componentPropsType';

interface constructorType<T, U> {
  new (createElementConfig: createElementType, $props: T): U;
}

export default class Component<T = {}> {
  $state: any;
  $props: T;
  $target: HTMLElement;
  component: Set<any>;
  $class: string | undefined;
  constructor(createElementConfig: createElementType, $props: T) {
    this.$target = createElement(createElementConfig);
    this.$props = $props;
    this.component = new Set();
  }

  CreateEl($outerTarget: HTMLElement) {
    this.$target = $outerTarget;
    this.init()
  }
  init() {
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  mounted() {}
  template() {
    return '';
  }

  protected setComponent<T, U>(
    createElementConfig: createElementType,
    childrenComponent: constructorType<T, U>,
    props?: T,
    _key?: number,
  ) {
    const key = _key ? _key : 0;
    this.component.add({ createElementConfig, childrenComponent, props, key });
    return `<div  id=${childrenComponent.name}-${key}></div>`;
  }

  protected ComponentsMounted() {
    if (this.component.size) {
      for (let {
        createElementConfig,
        childrenComponent,
        props,
        key,
      } of this.component.values()) {
        // ({ createElementConfig, childrenComponent, props, key }) => {
        const selector = `#${childrenComponent.name}-${key}`;
        const el = $(selector, this.$target);
        console.log(el, selector, this.$target, createElementConfig, key);
        const component = new childrenComponent(createElementConfig, props)
        component.init()
        if (el)
          el.replaceWith(
            component.$target,
          );
        else throw new Error('key 값을 확인하세요');
      }
    }
  }

  protected render() {
    this.$target.innerHTML = this.template();
    this.ComponentsMounted();
    this.mounted();
  }

  setEvent() {}

  addEvent<K extends keyof HTMLElementEventMap>(
    eventType: K,
    selector: string,
    callback: (ev: HTMLElementEventMap[K]) => void,
  ) {
    console.log(this.$target, "dd");
    const children = [...$all(selector, this.$target)];
    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);
    console.log(this.$target, "dd");
    this.$target.addEventListener(eventType, (ev: HTMLElementEventMap[K]) => {
      if (ev.target) {
        if (!isTarget(ev.target as HTMLElement)) return false;
        callback(ev);
      }
    });
  }

  protected setState(newState: any) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
