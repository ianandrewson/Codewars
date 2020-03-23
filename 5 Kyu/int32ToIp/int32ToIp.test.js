const { 
  int32ToIp, 
  int32ToBinary, 
  binaryToByteArray, 
  byteToInt, 
  byteArrayToIp } = require('./int32ToIp.js');

describe('int32ToIp tests', () => {
  it('should be able to convert a number to binary', () => {
    expect(int32ToBinary(1)).toEqual('00000000000000000000000000000001');
    expect(int32ToBinary(2)).toEqual('00000000000000000000000000000010');
    expect(int32ToBinary(3)).toEqual('00000000000000000000000000000011');
    expect(int32ToBinary(4)).toEqual('00000000000000000000000000000100');
    expect(int32ToBinary(256)).toEqual('00000000000000000000000100000000');
    expect(int32ToBinary(511)).toEqual('00000000000000000000000111111111');
    expect(int32ToBinary(512)).toEqual('00000000000000000000001000000000');
    expect(int32ToBinary(1024)).toEqual('00000000000000000000010000000000');
    expect(int32ToBinary(2048)).toEqual('00000000000000000000100000000000');
    expect(int32ToBinary(4096)).toEqual('00000000000000000001000000000000');
    expect(int32ToBinary(8192)).toEqual('00000000000000000010000000000000');
  });

  it('should be able to convert a 32 bit binary number to 4 bytes', () => {
    expect(binaryToByteArray(int32ToBinary(1))).toEqual(['00000000', '00000000', '00000000', '00000001']);
  });
});
