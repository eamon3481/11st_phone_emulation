import Component from '@src/lib/Component';
import { createElementType } from '@src/lib/componentLibType';

import { getState } from '@src/lib/Observer';
import { timeState, TimeStateType } from '@src/store/AlertTimeStore';

import AlertItem, { AlertItemType } from './AlertItem';

export default class AlertList extends Component {
  constructor(createElementConfig: createElementType) {
    super(createElementConfig);

    this.keys = [timeState];
    this.subscribe();
  }

  template() {
    const alertTimes = getState<TimeStateType>(timeState);
    return `${alertTimes.map((v, i) =>
      this.setComponent<AlertItem, AlertItemType>(
        { tagName: 'li', classNames: ['alert_item'] },
        AlertItem,
        { time: v , keys : i },
        i,
      ),
    ).join("")}`;
  }
}
