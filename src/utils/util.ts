export function $(target: string, root: HTMLElement) {
  if (root === undefined) return document.querySelector<HTMLElement>(target);
  return root.querySelector<HTMLElement>(target);
}

export function $all(target: string, root: HTMLElement) {
  if (root === undefined) return document.querySelectorAll<HTMLElement>(target);
  return root.querySelectorAll<HTMLElement>(target);
}

export function onEvent(
  target: HTMLElement,
  eventType: keyof WindowEventMap,
  fn: () => void,
) {
  target.addEventListener(eventType, fn);
}

type createElementType = {
  tagName: keyof HTMLElementTagNameMap;
  classNames: string[];
  value: string;
};
export function createElement({
  tagName,
  classNames = [],
  value = '',
}: createElementType) {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  if (value) element.innerHTML = value;
  return element;
}

export function createNowDate(date: Date) {
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
  delay: number
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
  delay: number
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


