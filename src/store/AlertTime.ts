import { initState } from '@src/lib/Observer';

export type TimeStateType = string[];

const storageAlertTime = localStorage.getItem('alertTime');

export const timeState = initState<string[]>({
  key: 'timeState',
  defaultValue: storageAlertTime ? JSON.parse(storageAlertTime) : [],
});
