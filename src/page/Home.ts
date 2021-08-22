import Component from '@src/lib/Component';
import Header from '@src/components/header';
import HomePageBody from '@src/components/home';
import { HeaderPropsType } from '@src/type/componentPropsType';
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
