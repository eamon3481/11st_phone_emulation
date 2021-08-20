import Component from '@src/lib/Component';
import Header from '@src/components/header/Header';

export default class Photo extends Component<undefined> {
  template() {
    return `${this.setComponent<{ type: 'HOME' | 'MEMO' }>(Header, {
      type: 'HOME',
    })}
    <div>Photo</div>`;
  }
}
