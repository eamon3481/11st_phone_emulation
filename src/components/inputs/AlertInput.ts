import Component from '@src/lib/Component';
import { getState, setState } from '@src/lib/Observer';
import { timeState, TimeStateType } from '@src/store/AlertTimeStore';
import { InputType, createElementType } from '@src/type/componentPropsType';
import { $, switchTenString } from '@src/utils/util';

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
      const amOrPm = ($('#am_pm', this.$target) as HTMLInputElement).value;
      const hour = ($('#hour', this.$target) as HTMLInputElement).value;
      const min = ($('#min', this.$target) as HTMLInputElement).value;
      let _value = '';
      if(amOrPm === ""){
        window.alert("오전오후를 입력해주세요")
        throw new Error("오전오후를 입력해주세요") 
      }
      if (hour === '12')
        _value =
          amOrPm === '0'
            ? '00' + ':' + switchTenString(+min)
            : '12' + ':' + switchTenString(+min);
      else {
        _value = switchTenString(+hour + +amOrPm) + ':' + switchTenString(+min);
      }

      setTimes([...times, _value]);
      localStorage.setItem('alertTime', JSON.stringify([...times, _value]));
      this.$props.setToggle({ toggle: false });
    };

    this.addEvent('click', '.alert_button', handleClick);
  }
  template() {
    return `

        <select id="am_pm" name='day'>
          <option value='' selected>-- 선택 --</option>
          <option value='0'>오전</option>
          <option value='12'>오후</option>
        </select>


        <input id="hour"  type="number" min="0" , max="12"  />
        시
        <input id="min"  type="number" min="0" , max="60" step="10"  />
        분
        <button class="alert_button">저장</button>
        `;
  }
}
