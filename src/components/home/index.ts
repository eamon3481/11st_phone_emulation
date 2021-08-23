import Component from '@src/lib/Component';
import AppButton from './AppButton';
import {
  AppButtonProps,
  createElementType,
} from '@src/type/componentPropsType';
import { positionState, PositionStateType } from '@src/store/PositionStore';
import { getState, setState } from '@src/lib/Observer';
export default class HomePageBody extends Component {
  constructor(createElementConfig: createElementType) {
    super(createElementConfig);

    this.keys = [positionState];
    this.subscribe();
  }

  setEvent() {
    const position = getState<PositionStateType>(positionState);
    const setPosition = setState<PositionStateType>(positionState);
    let dragged: { target: 'alert' | 'photo' | 'memo' };
    const textSwitch = (text: string): 'alert' | 'photo' | 'memo' =>
      text === '알람' ? 'alert' : text === '사진' ? 'photo' : 'memo';

    const handleDragStart = (e: MouseEvent) => {
      const text = (e.target as HTMLElement).innerText;

      const target = textSwitch(text);
      dragged = { target: textSwitch(text) };
    };

    const handleDragOver = (e: MouseEvent) => {
      (e.target as HTMLElement).style.background = 'gray';
      e.preventDefault();
    };

    const handleDragLeave = (e: MouseEvent) => {
      (e.target as HTMLElement).removeAttribute('style');
    };

    const handleDrop = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      target.removeAttribute('style');

      const _target = target.closest('.home_itemBox');
      if (!_target) return;

      const idx = _target.classList[1];
      if (target.classList[0] === 'AppButton') {
        position[textSwitch(target.innerText)] = position[dragged.target];
      }

      position[dragged.target] = +idx.slice(4);

      localStorage.setItem('Position', JSON.stringify(position));
      setPosition(position);
    };

    this.addEvent('dragstart', '.AppButton', handleDragStart);
    this.addEvent('dragover', '.home_itemBox', handleDragOver);
    this.addEvent('dragleave', '.home_itemBox', handleDragLeave);
    this.addEvent('drop', '.home_itemBox', handleDrop);
  }

  template() {
    const position = getState<PositionStateType>(positionState);
    const PositionNumber = 20;
    const items = new Array(PositionNumber).fill(
      '<div class="home_itemBox"></div>',
    );

    return `${items
      .map((v, i) => {
        if (i === position.alert)
          return this.setComponent<AppButton, AppButtonProps>(
            { tagName: 'div', classNames: ['home_itemBox', `idx_${i}`] },
            AppButton,
            { text: '알람', route: '/alert' },
            0,
          );
        if (i === position.memo)
          return this.setComponent<AppButton, AppButtonProps>(
            { tagName: 'div', classNames: ['home_itemBox', `idx_${i}`] },
            AppButton,
            { text: '메모', route: '/memo' },
            1,
          );
        if (i === position.photo)
          return this.setComponent<AppButton, AppButtonProps>(
            { tagName: 'div', classNames: ['home_itemBox', `idx_${i}`] },
            AppButton,
            { text: '사진', route: '/photo' },
            2,
          );
        return `<div class="home_itemBox idx_${i}"></div>`;
      })
      .join('')}`;
  }
}
