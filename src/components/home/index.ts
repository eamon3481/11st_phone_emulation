import Component from '@src/lib/Component';
import AppButton from './AppButton';
import {AppButtonProps} from '@src/type/componentPropsType'
export default class HomePageBody extends Component {
  template() {
    return `
      ${this.setComponent<AppButtonProps, AppButton>({ tagName: 'div' ,classNames: [ 'home_itemBox']},AppButton, { text: '알람', route: '/alert' }, 0)}
      ${this.setComponent<AppButtonProps, AppButton>({ tagName: 'div' ,classNames: [ 'home_itemBox']},AppButton, { text: '메모', route: '/memo' }, 1)}
      ${this.setComponent<AppButtonProps, AppButton>({ tagName: 'div' ,classNames: [ 'home_itemBox']},AppButton, { text: '사진', route: '/photo' }, 2)}
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>
      <div class="home_itemBox"></div>


      `;
  }
}
