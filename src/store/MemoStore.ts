import { initState } from '@src/lib/Observer';

export type MemoStateType = string[];

const storageMemo = localStorage.getItem('Memo');

export const memoState = initState<string[]>({
  key: 'memoState',
  defaultValue: storageMemo ? JSON.parse(storageMemo) : [],
});


export const memoFocusState = initState<number>({
  key: 'memoFocusState',
  defaultValue: -1,
});
