function $(target: string, root = document) {
 return root.querySelector<HTMLElement>(target);
}

function $all(target: string, root = document) {
 return root.querySelectorAll<HTMLElement>(target);
}

function onEvent(
 target: HTMLElement,
 eventType: keyof WindowEventMap,
 fn: () => void
) {
 target.addEventListener(eventType, fn);
}

type createElementType = {
 tagName: keyof HTMLElementTagNameMap;
 classNames: string[];
 value: string;
};

function createElement({
 tagName,
 classNames = [],
 value = '',
}: createElementType) {
 const element = document.createElement(tagName);
 element.classList.add(...classNames);
 if (value) element.innerHTML = value;
 return element;
}

export { createElement, onEvent, $all, $ };
