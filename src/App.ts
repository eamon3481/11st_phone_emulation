import Component from './core/Component';
import Header from './header/Header';
import { createNowDate,throttle } from './utils/util';

export default class App extends Component<undefined> {
  template() {
    return `${this.setComponent<{ type: 'HOME' | 'MEMO' }>(Header, {
      type: 'HOME',
    })}`;
  }
}
