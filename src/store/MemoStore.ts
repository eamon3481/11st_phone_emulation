import { initState } from '@src/lib/Observer';

export type MemoStateType = string[];

const storageMemo = localStorage.getItem('Memo');

export const memoState = initState<string[]>({
  key: 'memoState',
  defaultValue: storageMemo ? JSON.parse(storageMemo) : [],
});
