import Component from '@src/lib/Component';
import Header from '@src/components/header/Header';
import HomePageBody from '@src/components/home';

export default class Home extends Component<undefined> {
  template() {
    return `${this.setComponent<{ type: 'HOME' | 'MEMO' }>(Header, {
      type: 'HOME',
    })}
    ${this.setComponent<undefined>(HomePageBody, undefined)}
    `;
  }
}
