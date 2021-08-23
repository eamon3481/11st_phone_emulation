import Component from '@src/lib/Component';

import Header, { HeaderPropsType } from '@src/components/header/Header';
import PhotoView from '@src/components/photo/PhotoView';
import PhotoSelector from '@src/components/photo/PhotoSelectorList';

export default class Photo extends Component {
  template() {
    return `${this.setComponent<Header, HeaderPropsType>(
      { tagName: 'header', classNames: ['header'] },
      Header,
      { isApp: true },
    )}
    ${this.setComponent<PhotoSelector>(
      { tagName: 'nav', classNames: ['photo_selector'] },
      PhotoSelector,
    )}
    ${this.setComponent<PhotoView>(
      { tagName: 'section', classNames: ['photoView'] },
      PhotoView,
    )}
    `;
  }
}
