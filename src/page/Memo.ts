import Component from '@src/lib/Component';
import Header from '@src/components/header';
import { HeaderPropsType } from '@src/type/componentPropsType';
import MemoInput from '@src/components/inputs/MemoInput';
import MemoList from '@src/components/memo-list';

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
