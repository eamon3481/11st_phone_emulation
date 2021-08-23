import Component from './lib/Component';
import { historyRouterPush } from './lib/router';
import { $ } from './utils/util';

export default class ErrorPage extends Component {
  setEvent() {
    console.log(this.$target);
    this.addEvent('click', '.home', (evt: MouseEvent) => {
      const app = $('#app');

      if (!app) throw new Error('app tag 가 있는지 확인하세요');

      historyRouterPush('/', app);
    });
  }

  template() {
    return `
    <main class="error">
    <img class="error_img" src="img/error.jpg" />
    <button class="home">홈으로 돌아가기</button>
    </main>
    `;
  }
}
