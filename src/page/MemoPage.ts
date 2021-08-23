import Component from '@src/lib/Component';

import Header, { HeaderPropsType } from '@src/components/header/Header';
import MemoInput from '@src/components/memo/MemoInput';
import MemoList from '@src/components/memo/MemoList';

export default class Memo extends Component {
  template() {
    return `${this.setComponent<Header, HeaderPropsType>(
      { tagName: 'header' },
      Header,
      {
        isApp: true, input: MemoInput,
      },
    )}
    ${this.setComponent<MemoList>({tagName:'ul'},MemoList)}`;
  }
}
