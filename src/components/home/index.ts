import Component from '@src/lib/Component';

export default class HomePageBody extends Component<undefined> {
  template() {
    return `<main>
      <div route="/alert">알람</div><div route="/memo">메모</div><div route="/photo">사진</div>
      </main>
      `;
  }
}
