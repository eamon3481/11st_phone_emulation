import Component from '@src/lib/Component';
import { routeType } from '@src/route';


type textType = '알람' | '메모' | '사진';

export type HomeAppItemType = {
  text: textType;
  route: keyof routeType;
};


export default class HomeAppItem extends Component<HomeAppItemType> {
  template() {
    const { text, route } = this.$props;
    return `
      <button draggable="true" class="AppButton route" route="${route}"><span>${text}</span></button>
      `;
  }
}
