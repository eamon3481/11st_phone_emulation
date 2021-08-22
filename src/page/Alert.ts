import Component from '@src/lib/Component';
import Header from '@src/components/header';
import { HeaderPropsType } from '@src/type/componentPropsType';
import { historyRouterPush } from '@src/lib/router';
import { $ } from '@src/utils/util';
import AlertList from '@src/components/alertList';

export default class Alert extends Component<undefined> {
  template() {
    const onClick = (e: MouseEvent) => {
      historyRouterPush('/', $('#app'));
    };

    return `${this.setComponent<Header, HeaderPropsType>(
      { tagName: 'header' },
      Header,
      { onClick },
    )}
    ${this.setComponent<AlertList>({ tagName: 'ul' }, AlertList)}`;
  }
}
