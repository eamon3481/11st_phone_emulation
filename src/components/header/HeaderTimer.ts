import Component from '@src/lib/Component';
import { createNowDate, throttle } from '@src/utils/util';

export default class HeaderTimer extends Component {
  setup() {
    this.$state = {
      date: createNowDate(new Date()),
    };
  }
  mounted() {
    const throttleDateFn = throttle(
      (date) => this.setState({ date: createNowDate(date) }),
      1000,
    );
    throttleDateFn(new Date());
  }
  template() {
    return `${this.$state.date}`;
  }
}
