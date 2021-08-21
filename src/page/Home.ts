import Component from '@src/lib/Component';
import Header from '@src/components/header/Header';
import HomePageBody from '@src/components/home';
export default class Home extends Component {
  template() {
    return `${this.setComponent<{ type: 'HOME' | 'MEMO' }, Header>(
      { tagName: 'div' },
      Header,
      { type: 'HOME' },
    )}
    ${this.setComponent<{}, HomePageBody>(
      { tagName: 'main', classNames : ['home_main'] },
      HomePageBody,
    )}
    `;
  }
}
