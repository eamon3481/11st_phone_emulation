import Component, {  createElementType } from '@src/lib/Component';

import { getState } from '@src/lib/Observer';
import { imgState } from '@src/store/ImgUrlStore';


export default class PhotoView extends Component {
  constructor(createElementConfig: createElementType) {
    super(createElementConfig);
    this.keys = [imgState];
    this.subscribe();
  }
  template() {
    const imgUrl = getState<string>(imgState)
    if (imgUrl)
      return `<img class="photoView_img" src="${imgUrl}"/>`;
    return '';
  }
}
