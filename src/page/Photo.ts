import Component from '@src/lib/Component';
import Header from '@src/components/header';
import { HeaderPropsType } from '@src/type/componentPropsType';
import PhotoSelector from '@src/components/photoselector';

export default class Photo extends Component {
  template() {
    return `${this.setComponent<Header, HeaderPropsType>(
      { tagName: 'header', classNames: ['header'] },
      Header,
      { isApp: true },
    )}
    ${this.setComponent<PhotoSelector>(
      { tagName: 'div', classNames: ['photoselector'] },
      PhotoSelector,
    )}
    `;
  }
}
