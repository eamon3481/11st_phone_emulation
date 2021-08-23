import Component ,{ createElementType }from '@src/lib/Component';


import { getState } from '@src/lib/Observer';
import { memoFocusState, memoState, MemoStateType } from '@src/store/MemoStore';

import MemoItem, { MemoItemType } from './MemoItem';

export default class MemoList extends Component {
  constructor(createElementConfig: createElementType) {
    super(createElementConfig);

    this.keys = [memoState, memoFocusState];
    this.subscribe();
  }

  template() {
    const memos = getState<MemoStateType>(memoState);
    const focus = getState<number>(memoFocusState);
    return `${memos
      .map((v, i) => {
        if (focus === i)
          return this.setComponent<MemoItem, MemoItemType>(
            { tagName: 'li', classNames: ['memo_item', 'memo_focus'] },
            MemoItem,
            { memo: v, key: i },
            i,
          );
        return this.setComponent<MemoItem, MemoItemType>(
          { tagName: 'li', classNames: ['memo_item'] },
          MemoItem,
          { memo: v, key: i },
          i,
        );
      })
      .join('')}`;
  }
}
