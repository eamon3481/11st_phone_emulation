import Component from '@src/lib/Component';

import { getState } from '@src/lib/Observer';
import { imgState } from '@src/store/ImgUrlStore';
import { createElementType } from '@src/type/componentPropsType';

export default class PhotoView extends Component {
  constructor(createElementConfig: createElementType) {
    super(createElementConfig);
    this.keys = [imgState];
    this.subscribe();
  }
  template() {
    return `<img class="photoView_img" src="${getState<string>(imgState)}"/>`;
  }
}
