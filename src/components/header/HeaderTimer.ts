import Component from '@src/lib/Component';
import { createNowDate } from '@src/utils/util';

export default class HeaderTimer extends Component {
  setup() {
    this.$state = {
      date: createNowDate(new Date()),
    };
  }
  mounted() {
    setTimeout(() => {
      this.setState({ date: createNowDate(new Date()) });
    }, 1000);
  }
  template() {
    return `${this.$state.date}`;
  }
}
