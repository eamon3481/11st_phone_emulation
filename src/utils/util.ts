import { getState, setState } from '@src/lib/Observer';
import { timeState, TimeStateType } from '@src/store/AlertTimeStore';

export function $(target: string, root?: HTMLElement | Document) {
  if (root === undefined) return document.querySelector<HTMLElement>(target);
  return root.querySelector<HTMLElement>(target);
}

export function $all(target: string, root?: HTMLElement | Document) {
  if (root === undefined) return document.querySelectorAll<HTMLElement>(target);
  return root.querySelectorAll<HTMLElement>(target);
}

type createElementType = {
  tagName: keyof HTMLElementTagNameMap;
  classNames?: string[];
  value?: string;
};

export function createElement({
  tagName,
  classNames,
  value,
}: createElementType) {
  const element = document.createElement(tagName);
  if (classNames) element.classList.add(...classNames);
  if (value) element.innerHTML = value;
  return element;
}

export const switchTenString = (num: number) =>
num < 10 ? '0' + `${num}` : `${num}`;

export function createNowDate(date: Date) {
  const times = getState<TimeStateType>(timeState);
  const setTimes = setState<TimeStateType>(timeState);
 
  const alarm =
    switchTenString(date.getHours()) + ':' + switchTenString(date.getMinutes());
 
  if (times.indexOf(alarm) !== -1) {
    window.alert('알람 : ' + alarm);
    const editedTimeState = times.filter((v) => v !== alarm);
    setTimes(editedTimeState);
    localStorage.setItem('alertTime', JSON.stringify(editedTimeState));
    
  }
  return (
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일 ' +
    date.getHours() +
    '시 ' +
    date.getMinutes() +
    '분 ' +
    date.getSeconds() +
    '초'
  );
}

export function debounce<F extends (...args: any) => any>(
  func: F,
  delay: number,
) {
  let timeout: NodeJS.Timeout;
  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
}

export function throttle<F extends (...args: any) => any>(
  func: F,
  delay: number,
) {
  let timeout: NodeJS.Timeout | null;
  const throttled = (...args: any) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
    }
  };

  return throttled as (...args: Parameters<F>) => ReturnType<F>;
}
