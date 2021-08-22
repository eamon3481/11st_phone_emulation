import Component from '@src/lib/Component';
import { getState } from '@src/lib/Observer';
import { memoState, MemoStateType } from '@src/store/MemoStore';

export type MemoItemType = {
  memo: string;
};

export default class MemoItem extends Component<MemoItemType> {
  setEvent() {
    const memos = getState<MemoStateType>(memoState);
    const handleFocusBtn = (e: MouseEvent) => {
      if (this.$target.classList[1] === 'memo_focus')
        this.$target.classList.remove('memo_focus');
      else this.$target.classList.add('memo_focus');
    };
    this.addEvent('click', '.memo_item', handleFocusBtn);
  }
  template() {
    return `${this.$props.memo}`;
  }
}
