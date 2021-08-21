import Component from '@src/lib/Component';
import Header from '@src/components/header/Header';


export default class Alert extends Component<undefined> {
    
  template() {
    return `${this.setComponent<{ type: 'HOME' | 'MEMO' }, Header>(
      { tagName: 'header' },
      Header,
      { type: 'HOME' },
    2)}
    <div>Alert</div>`;
  }
}
