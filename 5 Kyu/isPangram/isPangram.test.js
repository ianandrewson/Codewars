const isPangram = require('./isPangram');

describe('isPangram tests', () => {
  it('should return false', () => {
    const str = 'this is not a pangram';

    expect(isPangram(str)).toEqual(false);
  });

  it('should return true', () => {
    const str = 'this quick brown fox jumps over the lazy dog';

    expect(isPangram(str)).toBeTruthy();
  });
});
