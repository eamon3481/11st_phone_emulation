import Component from '@src/core/Component';
import { createNowDate, throttle } from '@src/utils/util';

export default class Header extends Component<{
  type: 'HOME' | 'MEMO';
}> {
  setup() {
    this.$state = { date: createNowDate(new Date()) };
  }
  mounted() {
    const test = throttle(
      (date) => this.setState({ date: createNowDate(date) }),
      500,
    );
    test(new Date());
  }
  template() {
    const { type } = this.$props;

    if (type === 'HOME')
      return `<header class="header"><div>${this.$state.date}</div></header> `;
    return '';
  }
}
