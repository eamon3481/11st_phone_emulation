import Component from '@src/lib/Component';
import { getState, setState } from '@src/lib/Observer';
import { imgState } from '@src/store/ImgUrlStore';
import { createElementType } from '@src/type/componentPropsType';

export type PhotoItemType = {
  imgUrl: string;
};

export default class PhotoSelectorItem extends Component<PhotoItemType> {
  constructor(createElementConfig: createElementType, $props: PhotoItemType) {
    super(createElementConfig, $props);
    this.keys = [imgState];
    this.subscribe();
  }

  setEvent() {
    const setImgUrl = setState<string>(imgState);
    const handlePhotoClick = (e: MouseEvent) => {
      const imgUrl = (e.target as HTMLImageElement).getAttribute('src');
      if (imgUrl) setImgUrl(imgUrl);
    };
    this.addEvent('click', '.photo_selector_item_img', handlePhotoClick);
  }

  template() {
    if (this.$props.imgUrl === getState<string>(imgState))
      return `<img class="photo_selector_item_img photo_selector_select" src="${this.$props.imgUrl}"/>`;
    return `<img class="photo_selector_item_img" src="${this.$props.imgUrl}"/>`;
  }
}
