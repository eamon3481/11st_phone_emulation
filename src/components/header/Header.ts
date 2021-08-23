import { $ } from '@src/utils/util';

import { historyRouterPush } from '@src/lib/router';

import Component, { createElementType, constructorType } from '@src/lib/Component';

import HeaderTimer from './HeaderTimer';


export type InputType = {
  setToggle: (newState: any) => void;
};


export type HeaderPropsType<T = any> = {
  isApp: Boolean;
  input?: constructorType<InputType, T>;
};



export default class Header extends Component<HeaderPropsType> {
  isApp: Boolean;

  constructor(createElementConfig: createElementType, $props: HeaderPropsType) {
    super(createElementConfig, $props);
    this.isApp = $props !== undefined;
  }
  setup() {
    const handleBackClick = (e: MouseEvent) => {
      const app = $('#app')
       if(!app) throw new Error("App tag가 없습니다") 
       historyRouterPush('/', app);
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
        ? this.setComponent(
            { tagName: 'div', classNames: ['input'] },
            this.$props.input,
            {
              setToggle: this.setState.bind(this),
            },
          )
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
