import Component from '@src/lib/Component';
import Header from '@src/components/header/Header';
import { HeaderPropsType } from '@src/type/componentPropsType';
import { historyRouterPush } from '@src/lib/router';
import { $ } from '@src/utils/util';

export default class Alert extends Component<undefined> {
  template() {
    const onClick = (e: MouseEvent) => {
      historyRouterPush("/", $('#app'))
    };

    return `${this.setComponent<Header,HeaderPropsType>(
      { tagName: 'header'},
      Header,
      { onClick },
 
    )}
    <div>Alert</div>`;
  }
}
