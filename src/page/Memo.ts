import Component from '@src/lib/Component';
import Header from '@src/components/header/Header';

export default class Memo extends Component<undefined> {
  template() {
    return `${this.setComponent<{ type: 'HOME' | 'MEMO' }, Header>(
      { tagName: 'header' },
      Header,
      { type: 'HOME' },
    1)}
    <div>Memo</div>`;
  }
}
