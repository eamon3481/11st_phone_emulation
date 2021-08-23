import Component from '@src/lib/Component';
import { getState, setState } from '@src/lib/Observer';
import { memoFocusState  } from '@src/store/MemoStore';

export type MemoItemType = {
  memo: string;
  key: number;
};

export default class MemoItem extends Component<MemoItemType> {
  setEvent() {
    const setFocus = setState<number>(memoFocusState);
    const focus = getState<number>(memoFocusState);
    const handleFocusBtn = (e: MouseEvent) => {
      if (focus === this.$props.key) setFocus(-1);
      else setFocus(this.$props.key);
    };
    this.addEvent('click', '.memo_item', handleFocusBtn);
  }
  template() {
    return `${this.$props.memo}`;
  }
}
