import Component from './lib/Component';
import { initialRoutes, historyRouterPush, checkRouteType } from './lib/router';
import { $ } from './utils/util';


export default class App extends Component {
 
  setEvent() {
    this.addEvent('click', '#app', (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;
      if (target.closest(".route")?.getAttribute('route')) {
        const pathName = target.closest(".route")?.getAttribute('route');
        const checkedPathName = checkRouteType(pathName)
        
        const app =  $('#app')
        if(!app) throw new Error("app tag 가 있는지 확인하세요")

        historyRouterPush(checkedPathName, app);
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
