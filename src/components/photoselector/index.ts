import Component from '@src/lib/Component';
import PhotoSelectorItem, { PhotoSelectorItemType } from './PhotoSelectorItem';

export default class PhotoSelector extends Component {
  setup() {
    const imgNumber = 6;
    const rangeArr = new Array(imgNumber).fill(0);
    this.$state = { imgUrlRange: rangeArr };
  }

  template() {
    return `${this.$state.imgUrlRange
      .map((v: number, i: number) =>
        this.setComponent<PhotoSelectorItem, PhotoSelectorItemType>(
          { tagName: 'div', classNames: ['photoselector_Item'] },
          PhotoSelectorItem,
          { imgUrl: `img/${i + 1}.jpg` },
          i,
        ),
      )
      .join('')}`;
  }
}
