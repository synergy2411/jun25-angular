import { add } from './utils/maths';

it('should be truthy', () => {
  expect(true).toBeTruthy();
});

it('should return addition of two given numbers', () => {
  const result = add(2, 4);
  expect(result).toEqual(6);
});
