export function canIterate(obj) {
  try {
    // eslint-disable-next-line no-unused-expressions
    [...obj];
    return true;
  } catch (e) {
    return false;
  }
}

/// здесь я немного погуглил
export function canIterateElso(obj) {
  if (obj === null) return false;
  return typeof obj[Symbol.iterator] === 'function';
}
