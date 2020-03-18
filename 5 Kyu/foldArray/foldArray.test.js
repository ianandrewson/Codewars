const foldArray = require('./foldArray.js');

describe('foldArray tests', () => {
  it('should return an array with one element', () => {
    const arr = [1];

    expect(foldArray(arr, 1)).toEqual([1]);
  });

  it('should be able to fold an array once', () => {
    const arr = [1, 1, 1];

    expect(foldArray(arr, 1)).toEqual([2, 1]);
  });

  it('should be able to fold an array twice', () => {
    const arr = [1, 1, 1];

    expect(foldArray(arr, 2)).toEqual([3]);
  });

  it('should be able to fold an array three times', () => {
    const arr = [1, 1, 1];

    expect(foldArray(arr, 3)).toEqual([3]);
  });

  it('should be able to fold an array of length 5 three times', () => {
    const arr = [1, 1, 1, 1, 1];

    expect(foldArray(arr, 1)).toEqual([2, 2, 1]);
    expect(foldArray(arr, 2)).toEqual([3, 2]);
    expect(foldArray(arr, 3)).toEqual([5]);
  });
});
