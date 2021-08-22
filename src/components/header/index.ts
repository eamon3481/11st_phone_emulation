import Component from '@src/lib/Component';
import { $ } from '@src/utils/util';
import { HeaderPropsType } from '@src/type/componentPropsType';
import { historyRouterPush } from '@src/lib/router';
import AlertInput from './AlertInput';
import HeaderTimer from './HeaderTimer';

export default class Header extends Component<HeaderPropsType> {
  setup() {
    const { onClick } = this.$props;
    const handleBackClick = (e: MouseEvent) => {
      historyRouterPush('/', $('#app'));
    };

    const handleNewClick = (e: MouseEvent) => {
      console.log(this.$state.toggle);
      this.setState({ toggle: !this.$state.toggle });
    };
    this.addEvent('click', '.header_back_button', handleBackClick);
    this.$state = {
      isHome: !Boolean(onClick),
      toggle: false,
      inputData: {},
    };
    if (onClick) this.addEvent('click', '.header_new_button', handleNewClick);
  }

  template() {
    if (this.$state.isHome)
      return `${this.setComponent({ tagName: 'div' }, HeaderTimer)} `;
    return `<header class="header">
    <button class="header_back_button">Back</button>
    ${this.setComponent({ tagName: 'div' }, HeaderTimer)}
    <button class="header_new_button">New</button>
    </header>
    ${
      this.$state.toggle
        ? this.setComponent({ tagName: 'div' }, AlertInput, { setToggle : this.setState.bind(this) })
        : ''
    }
    `;
  }
}
