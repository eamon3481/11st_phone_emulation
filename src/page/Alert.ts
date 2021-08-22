import Component from '@src/lib/Component';
import Header from '@src/components/header';
import { HeaderPropsType } from '@src/type/componentPropsType';

import AlertList from '@src/components/alert-list';
import AlertInput from '@src/components/inputs/AlertInput';


export default class Alert extends Component {
  template() {
 

    return `${this.setComponent<Header, HeaderPropsType<AlertInput>>(
      { tagName: 'header' },
      Header,
      { isApp: true , input : AlertInput },
    )}
    ${this.setComponent<AlertList>({ tagName: 'ul' }, AlertList)}`;
  }
}
