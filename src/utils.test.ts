import { countText } from './utils';

describe('.countText', () => {
  const KICHI = '吉';
  const KICHI_SURROGATE = '𠮷'; // .length === 2

  test.each([
    ['1', 1],
    ['1a', 2],
    ['あ', 1],
    [KICHI, 1],
    [KICHI_SURROGATE, 1],
  ])(".add(%i, %i)", (a, expected) => {
    expect(countText(a)).toBe(expected);
  });
});
