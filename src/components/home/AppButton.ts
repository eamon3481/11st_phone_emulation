import Component from '@src/lib/Component';
import { AppButtonProps } from '@src/type/componentPropsType';

export default class AppButton extends Component<AppButtonProps> {
  template() {
    const { text, route } = this.$props;
    return `
      <button class="AppButton route" route="${route}"><span>${text}</span></button>
      `;
  }
}
