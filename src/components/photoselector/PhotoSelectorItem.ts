import Component from '@src/lib/Component';

export type PhotoSelectorItemType = {
    imgUrl : string
}

export default class PhotoSelectorItem extends Component<PhotoSelectorItemType> {
  
    template() {
    return `<img class="photoselector_item_img" src="${this.$props.imgUrl}"/>`;
  }
}
