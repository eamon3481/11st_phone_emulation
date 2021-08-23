import Component from '@src/lib/Component';

import Header,  { HeaderPropsType } from '@src/components/header/Header';
import HomePageBody from '@src/components/home/HomeAppList';

export default class Home extends Component {
  
  template() {
    return `${this.setComponent<Header,HeaderPropsType>(
      { tagName: 'header' , classNames:['header']},
      Header
    ,{isApp : false}
      )}
    ${this.setComponent<HomePageBody>(
      { tagName: 'main', classNames: ['home_main'] },
      HomePageBody,
    )}
    `;
  }
}
