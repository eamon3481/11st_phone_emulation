import { createNowDate, throttle } from '@src/utils/util';
import 'jest-localstorage-mock';
jest.useFakeTimers();

describe('createNowDate', () => {
  it('현재 날짜 반환', () => {
    expect(createNowDate(new Date('2019-10-10 12:10:33'))).toBe(
      '2019년 10월 10일 12시 10분 33초',
    );
  });

  it('0.5초에 한번씩 실행', () => {
    const callback = jest.fn();
    const th = throttle(callback, 500);
    th();
    setTimeout(() => {
      expect(callback).toBeCalled();
    }, 500);

    jest.runAllTimers();
  });
});
