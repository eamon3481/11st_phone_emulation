import { initState } from '@src/lib/Observer';

export type PositionStateType = {
  alert: number;
  photo: number;
  memo: number;
};
const defaultPositionValue = {
  alert: 0,
  photo: 1,
  memo: 2,
};

const storagePosition = localStorage.getItem('Position');

if (!storagePosition)
  localStorage.setItem('Position', JSON.stringify(defaultPositionValue));

export const positionState = initState<PositionStateType>({
  key: 'positionState',
  defaultValue: storagePosition
    ? JSON.parse(storagePosition)
    : defaultPositionValue,
});
