import { $all } from '../utils/util';

interface ComponentStackType {
  childrenComponent: any;
  props: any;
  key: number;
}

export default class Component<T> {
  $state: any;
  $props: T;
  $target: HTMLElement;
  component: ComponentStackType[];
  constructor($target: HTMLElement, $props: T) {
    this.$target = $target;
    this.$props = $props;
    this.component = [];
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  mounted() {}
  template() {
    return '';
  }

  protected setComponent<P>(childrenComponent: any, props: P, key: number = 0) {
    this.component.push({ childrenComponent, props, key });
    return `<div data-key=${key} data-component=${childrenComponent.name}></div>`;
  }

  protected ComponentsMounted() {
    if (this.component.length) {
      this.component.forEach(({ childrenComponent, props, key }) => {
        const selector = `[data-component="${childrenComponent.name}"]`;
        new childrenComponent($all(selector, this.$target)[key], props);
      });
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
    const children = [...$all(selector, this.$target)];
    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (ev :  HTMLElementEventMap[K]) => {
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
