import Component from '@src/core/Component';
import Header from '@src/header/Header';


export default class Home extends Component<undefined> {
    
  template() {
    console.log("dd")
    return `${this.setComponent<{ type: 'HOME' | 'MEMO' }>(Header, {
      type: 'HOME',
    })}`;
  }
}
