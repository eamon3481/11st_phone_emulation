import Component from '@src/lib/Component';
import { getState, setState } from '@src/lib/Observer';
import { memoState, MemoStateType } from '@src/store/MemoStore';
import { InputType, createElementType } from '@src/type/componentPropsType';
import { $ } from '@src/utils/util';


export default class MemoInput extends Component<InputType> {
  constructor(createElementConfig: createElementType, $props: InputType) {
    super(createElementConfig, $props);

    this.keys = [memoState];
    this.subscribe();
  }

  setEvent() {
    const setTimes = setState<MemoStateType>(memoState);

    const handleClick = (e: MouseEvent) => {
      const memos = getState<MemoStateType>(memoState);
      const value = ($('.memo_input', this.$target) as HTMLInputElement).value;
      setTimes([...memos, value]);
      localStorage.setItem('Memo', JSON.stringify([...memos, value]));
      this.$props.setToggle({ toggle: false });
    };

    this.addEvent('click', '.memo_button', handleClick);
  }
  template() {
    return `
        <input class="memo_input" type ="text"/>
        <button class="memo_button">저장</button>
        `;
  }
}
