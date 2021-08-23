export interface constructorType<T, U> {
  new (createElementConfig: createElementType, $props: T): U;
}

export interface createElementType {
  tagName: keyof HTMLElementTagNameMap;
  classNames?: string[];
  value?: string;
}
