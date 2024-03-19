import { canIterate, canIterateElso } from '../index';

const exp = [
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],
];
test.each(exp)(
  ('`testing canIterate %s`'),
  (obj, expected) => {
    const res = canIterate(obj);
    expect(res).toBe(expected);
  },
);

test.each(exp)(
  ('`testing canIterate %s`'),
  (obj, expected) => {
    const res = canIterateElso(obj);
    expect(res).toBe(expected);
  },
);
