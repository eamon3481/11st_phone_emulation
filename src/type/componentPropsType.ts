import { constructorType } from '@src/lib/Component';

type textType = '알람' | '메모' | '사진';
type routerType = '/alert' | '/memo' | '/photo';

export type AppButtonProps = {
  text: textType;
  route: routerType;
};

export type InputType = {
  setToggle: (newState: any) => void;
};

export type HeaderPropsType<T = any> = {
  input: constructorType<InputType, T> ;
};

export type createElementType = {
  tagName: keyof HTMLElementTagNameMap;
  classNames?: string[];
  value?: string;
};
