import Component from '@src/lib/Component';
import { getState, setState } from '@src/lib/Observer';
import { timeState, TimeStateType } from '@src/store/AlertTimeStore';
import { InputType, createElementType } from '@src/type/componentPropsType';
import { $ } from '@src/utils/util';


export default class AlertInput extends Component<InputType> {
  constructor(createElementConfig: createElementType, $props: InputType) {
    super(createElementConfig, $props);

    this.keys = [timeState];
    this.subscribe();
  }

  setEvent() {
    const setTimes = setState<TimeStateType>(timeState);

    const handleClick = (e: MouseEvent) => {
      const times = getState<TimeStateType>(timeState);
      const value = ($('.alert_input', this.$target) as HTMLInputElement).value;
      setTimes([...times, value]);
      localStorage.setItem('alertTime', JSON.stringify([...times, value]));
      this.$props.setToggle({ toggle: false });
    };

    this.addEvent('click', '.alert_button', handleClick);
  }
  template() {
    return `
        <input class="alert_input" type ="time"/>
        <button class="alert_button">저장</button>
        `;
  }
}
