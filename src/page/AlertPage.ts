import Component from '@src/lib/Component';

import Header, { HeaderPropsType } from '@src/components/header/Header';
import AlertList from '@src/components/alert/AlertList';
import AlertInput from '@src/components/alert/AlertInput';

export default class Alert extends Component {
  template() {
 
    return `${this.setComponent<Header, HeaderPropsType<AlertInput>>(
      { tagName: 'header' },
      Header,
      { isApp: true, input: AlertInput },
    )}
    ${this.setComponent<AlertList>({ tagName: 'ul' }, AlertList)}`;
  }
}
