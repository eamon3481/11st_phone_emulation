import Component from '@src/lib/Component';
import { createElementType } from '@src/lib/componentLibType';

import { getState, setState } from '@src/lib/Observer';
import { memoState, MemoStateType } from '@src/store/MemoStore';

import { $ } from '@src/utils/util';

import { InputType } from '@src/type/componentPropsType';


export default class MemoInput extends Component<InputType> {
  constructor(createElementConfig: createElementType, $props: InputType) {
    super(createElementConfig, $props);

    this.keys = [memoState];
    this.subscribe();
  }

  setEvent() {
    const setTimes = setState<MemoStateType>(memoState);

    const handleSubmit = (e: KeyboardEvent | MouseEvent ) => {
      if((e as KeyboardEvent ).key !== "Enter" && (e as KeyboardEvent ).key !== undefined) return
      const memos = getState<MemoStateType>(memoState);
      const value = ($('.memo_input', this.$target) as HTMLInputElement).value;
      if(value === ""){
        window.alert("메모를 입력해주세요")
        throw new Error("메모를 입력해주세요") 
      }
      setTimes([...memos, value]);
      localStorage.setItem('Memo', JSON.stringify([...memos, value]));
      this.$props.setToggle({ toggle: false });
    };

    this.addEvent('click', '.memo_button', handleSubmit);
    this.addEvent('keypress', '.memo_input', handleSubmit);
  }
  template() {
    return `
        <input class="memo_input" type ="text"/>
        <button class="memo_button">저장</button>
        `;
  }
}
