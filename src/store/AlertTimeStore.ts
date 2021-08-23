import { initState } from '@src/lib/Observer';

export type TimeStateType = string[];

const storageAlertTime = localStorage.getItem('alertTime');

export const timeState = initState<TimeStateType>({
  key: 'timeState',
  defaultValue: storageAlertTime ? JSON.parse(storageAlertTime) : [],
});
