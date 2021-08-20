import Component from './lib/Component';
import { initialRoutes, historyRouterPush } from './lib/router';
import { $ } from './utils/util';

export default class App extends Component<undefined> {
  route: HTMLElement | null;

  constructor($target: HTMLElement, $props: undefined) {
    super($target, $props);
    this.route = null;
  }
  setup() {
    this.route = null;
  }
  setEvent() {
    this.addEvent('click', '#app', (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
      if (target.getAttribute('route')) {
        const pathName = target.getAttribute('route');
        historyRouterPush(pathName, this.$target);
      }
    });
  }
  mounted() {
    this.route = $('#route', this.$target);
    console.log(window.location.pathname);
    initialRoutes(this.route)
    //historyRouterPush(window.location.pathname, this.route);
  }
  template() {
    return '<div id="route"></div>';
  }
}
