import { $, $all, createElement } from '../utils/util';
import { subscribe } from './Observer';

export  type constructorType<T, U> = {
  new (createElementConfig: createElementType, $props: T): U;
}

export  type createElementType = {
  tagName: keyof HTMLElementTagNameMap;
  classNames?: string[];
  value?: string;
}



export default class Component<T = void> {
  public $state: any;
  public $props: T;
  public keys: Array<string>;
  $target: HTMLElement;
  component: { [key: string]: any };

  constructor(createElementConfig: createElementType, $props: T) {
    this.$target = createElement(createElementConfig);
    this.$props = $props;
    this.component = {};
    this.keys = [];
  }

  CreateEl($outerTarget: HTMLElement) {
    this.$target = $outerTarget;
    this.init();
  }
  init() {
    this.setup();
    this.setEvent();
    this.render();
  }

  subscribe() {
    this.keys.forEach((key) => subscribe(key, this.render.bind(this)));
  }



  setup() {}
  mounted() {}
  template() {
    return '';
  }

  protected setComponent<U, T = void>(
    createElementConfig: createElementType,
    childrenComponent: constructorType<T, U>,
    props?: T,
    _key?: number,
  ) {
    const key = _key ? _key : 0;
    const propsKey = `${childrenComponent.name}-${key}`;
    if (!this.component[propsKey]) {
      this.component[propsKey] = {
        createElementConfig,
        childrenComponent,
        props,
      };
    } else {
      this.component[propsKey] = {
        createElementConfig,
        childrenComponent,
        props,
      };
    }

    return `<div  id=${childrenComponent.name}-${key}></div>`;
  }

  protected ComponentsMounted() {
    if (Object.keys(this.component).length) {
      for (const key in this.component) {
        const { createElementConfig, childrenComponent, props } =
          this.component[key];
        const selector = `#${key}`;
        const el = $(selector, this.$target);
        const component = new childrenComponent(createElementConfig, props);
        component.init();
        if (el) el.replaceWith(component.$target);
        else throw new Error('key 값을 확인하세요');
      }
    }
  }

  protected render() {
    this.$target.innerHTML = this.template();
    this.ComponentsMounted();
    this.mounted();
    this.component = {};
  }

  setEvent() {}

  addEvent<K extends keyof HTMLElementEventMap>(
    eventType: K,
    selector: string,
    callback: (ev: HTMLElementEventMap[K]) => void,
  ) {
    const children = [...$all(selector, this.$target)];
    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);

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
