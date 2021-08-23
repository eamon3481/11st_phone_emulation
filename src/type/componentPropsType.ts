import { constructorType } from '@src/lib/componentLibType';


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
  isApp: Boolean;
  input?: constructorType<InputType, T>;
};

