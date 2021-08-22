

type stateModel = {
  _state: any;
  _observers: Set<() => void>;
};

export type globalStateType = {
  [key: string]: stateModel;
};


const globalState: globalStateType = {};

const subscribe = (key: string, observer: () => void): void => {
  globalState[key]._observers.add(observer);
};

const unsubscribe = (key: string, observer: () => void): void => {
  globalState[key]._observers.delete(observer);
};

const _notify = (key: string) => globalState[key]._observers.forEach((observer) => observer());

const initState = <T>({ key, defaultValue }: { key: string; defaultValue: T }): string => {
  if (key in globalState) throw Error('이미 존재하는 key값 입니다.');
  globalState[key] = {
    _state: defaultValue,
    _observers: new Set(),
  };
  return key;
};

const getState = <T>(key: string): T => {
  if (!(key in globalState)) throw Error('존재하지 않는 key값 입니다.');
  return globalState[key]._state;
};

const setState =
  <T>(key: string) =>
  (newState: ((arg: T) => T) | T): void => {
    if (!(key in globalState)) throw Error('존재하지 않는 key값 입니다.');

    if (newState instanceof Function) {
      const state = getState<T>(key);
      globalState[key]._state = newState(state);
    } else {
      globalState[key]._state = newState;
    }

    _notify(key);
  };

export { subscribe, unsubscribe, initState, getState, setState };