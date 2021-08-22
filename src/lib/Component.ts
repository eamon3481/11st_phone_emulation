import { $, $all, createElement } from '../utils/util';
import { createElementType } from '@src/type/componentPropsType';
import { subscribe, unsubscribe } from './Observer';

interface constructorType<T, U> {
  new (createElementConfig: createElementType, $props: T): U;
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
  initState() {
    return {};
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
  // subscribedRender(){
  //   this.unsubscribe(); //하위 컴포넌트 구독 해제
  //   this.render(); //하위 컴포넌트 재생성
  // }
  subscribe() {
    this.keys.forEach((key) => subscribe(key, this.render.bind(this)));
  }

  // unsubscribe(isCurrentComp = true): void {
  //   if (!isCurrentComp && this.keys.length) {
  //     this.keys.forEach((key) => unsubscribe(key, this.reRender));
  //   }
  // }

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
    console.log(this.$target, 'dd');
    const children = [...$all(selector, this.$target)];
    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);
    console.log(this.$target, 'dd');
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
