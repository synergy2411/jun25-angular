import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should reverse the given string value', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('Hello')).toBe('olleH');
  });
});
