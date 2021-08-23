import Component from '@src/lib/Component';

import { getState, setState } from '@src/lib/Observer';
import { timeState, TimeStateType } from '@src/store/AlertTimeStore';

export type AlertItemType = {
  time: string;
  keys: number;
};

export default class AlertItem extends Component<AlertItemType> {
  setEvent() {
    const setTime = setState<TimeStateType>(timeState);
    const times = getState<TimeStateType>(timeState);

    const handleDeleteBtn = (e: MouseEvent) => {
      const editTimeState = times.filter((v, i) => i !== this.$props.keys);
      setTime(editTimeState);
      localStorage.setItem('alertTime', JSON.stringify(editTimeState));
    };
    this.addEvent('click', '.alert_item_delete', handleDeleteBtn);
  }
  template() {
    return `<div>${this.$props.time}</div>
    <button class="alert_item_delete">삭제</button>`;
  }
}
