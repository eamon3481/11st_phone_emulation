import { initState } from '@src/lib/Observer';

export type ImgStateType = string;


export const imgState = initState<string>({
  key: 'imgState',
  defaultValue: ''
});
