import Component from '@src/lib/Component';
import { $ } from '@src/utils/util';
import {
  createElementType,
  HeaderPropsType,
} from '@src/type/componentPropsType';
import { historyRouterPush } from '@src/lib/router';
import HeaderTimer from './HeaderTimer';

export default class Header extends Component<HeaderPropsType> {
  isApp: Boolean;

  constructor(createElementConfig: createElementType, $props: HeaderPropsType) {
    super(createElementConfig, $props);
    this.isApp = $props !== undefined;
  }
  setup() {
    const handleBackClick = (e: MouseEvent) => {
      historyRouterPush('/', $('#app'));
    };

    const handleNewClick = (e: MouseEvent) => {
      this.setState({ toggle: !this.$state.toggle });
    };
    this.addEvent('click', '.header_back_button', handleBackClick);
    this.$state = {
      toggle: false,
    };
    this.addEvent('click', '.header_new_button', handleNewClick);
  }

  template() {
    if (this.$props.input)
      return `<header class="header">
    <button class="header_back_button">Back</button>
    ${this.setComponent({ tagName: 'div' }, HeaderTimer)}
    <button class="header_new_button">New</button>
    </header>
    ${
      this.$state.toggle
        ? this.setComponent({ tagName: 'div' }, this.$props.input, {
            setToggle: this.setState.bind(this),
          })
        : ''
    }
    `;
    if (this.$props.isApp)
      return `
    <button class="header_back_button">Back</button>
    ${this.setComponent({ tagName: 'div' }, HeaderTimer)}
    <div></div>`;

    return `${this.setComponent({ tagName: 'div' }, HeaderTimer)} `;
  }
}
