import Component from '@src/lib/Component';
import { createElementType } from '@src/lib/componentLibType';

import { getState } from '@src/lib/Observer';
import { memoState, MemoStateType } from '@src/store/MemoStore';

import MemoItem, { MemoItemType } from './MemoItem';


export default class MemoList extends Component {
  constructor(createElementConfig: createElementType) {
    super(createElementConfig);

    this.keys = [memoState];
    this.subscribe();
  }

  template() {
    const memos = getState<MemoStateType>(memoState);
    return `${memos.map((v, i) =>
      this.setComponent<MemoItem, MemoItemType>(
        { tagName: 'li', classNames: ['memo_item'] },
        MemoItem,
        { memo: v ,},
        i,
      ),
    ).join("")}`;
  }
}
