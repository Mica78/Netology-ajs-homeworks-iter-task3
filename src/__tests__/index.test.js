import { canIterate, canIterateElso } from '../index';

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],
])(
  ('`testing canIterate %s`'),
  (obj, expected) => {
    const res = canIterate(obj);
    expect(res).toBe(expected);
  },
);

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],
])(
  ('`testing canIterate %s`'),
  (obj, expected) => {
    const res = canIterateElso(obj);
    expect(res).toBe(expected);
  },
);
