import { createNowDate } from '@src/utils/util';
import 'jest-localstorage-mock';
jest.useFakeTimers();

describe('createNowDate', () => {
  it('현재 날짜 반환', () => {
    expect(createNowDate(new Date('2019-10-10 12:10:33'))).toBe(
      '2019년 10월 10일 12시 10분 33초',
    );
  });
});
