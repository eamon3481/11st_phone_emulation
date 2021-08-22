import Component from '@src/lib/Component';
import Header from '@src/components/header';
import { HeaderPropsType } from '@src/type/componentPropsType';

export default class Photo extends Component {
  template() {
    return `${this.setComponent<Header, HeaderPropsType>(
      { tagName: 'div' },
      Header
    )}
    <div>Photo</div>`;
  }
}
