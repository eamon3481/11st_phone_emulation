import Component from '@src/lib/Component';
import Header from '@src/components/header';
import { HeaderPropsType } from '@src/type/componentPropsType';
import MemoInput from '@src/components/inputs/MemoInput';

export default class Memo extends Component<undefined> {
  template() {
    return `${this.setComponent<Header, HeaderPropsType>(
      { tagName: 'header' },
      Header,
      {
        input: MemoInput,
      },
    )}
    <div>Memo</div>`;
  }
}
