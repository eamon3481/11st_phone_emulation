import { initState } from '@src/lib/Observer';

export type ImgStateType = string;


export const imgState = initState<ImgStateType>({
  key: 'imgState',
  defaultValue: ''
});
