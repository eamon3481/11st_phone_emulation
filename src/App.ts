import Component from './lib/Component';
import { initialRoutes, historyRouterPush } from './lib/router';
import { $ } from './utils/util';
import { createElementType } from '@src/type/componentPropsType';

export default class App extends Component {
 
  setEvent() {
    this.addEvent('click', '#app', (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
      if (target.closest(".route")?.getAttribute('route')) {
        const pathName = target.closest(".route")?.getAttribute('route');
        historyRouterPush(pathName, $('#app'));
      }
    });
  }
  mounted() {
    initialRoutes(this.$target);
  }
  template() {
    return '';
  }
}
