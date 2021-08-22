import Component from '@src/lib/Component';
import Header from '@src/components/header';
import { HeaderPropsType } from '@src/type/componentPropsType';
import PhotoSelector from '@src/components/photoselector';
import PhotoView from '@src/components/photoview';
import { PhotoItemType } from '@src/components/photoselector/PhotoSelectorItem';

export default class Photo extends Component {
  template() {
    return `${this.setComponent<Header, HeaderPropsType>(
      { tagName: 'header', classNames: ['header'] },
      Header,
      { isApp: true },
    )}
    ${this.setComponent<PhotoSelector>(
      { tagName: 'nav', classNames: ['photoselector'] },
      PhotoSelector,
    )}
    ${this.setComponent<PhotoView>(
      { tagName: 'section', classNames: ['photoView'] },
      PhotoView
    )}
    `;
  }
}
