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

  it('should be able to convert a byte to an int', () => {
    expect(byteToInt('00000001')).toEqual(1);
    expect(byteToInt('00000011')).toEqual(3);
    expect(byteToInt('11111111')).toEqual(255);
  });

  it('should be able to convert an array of bytes to an IP', () => {
    expect(byteArrayToIp(['00000000', '00000000', '00000000', '00000001'])).toEqual('0.0.0.1');
    expect(byteArrayToIp(['00000000', '00000000', '00000001', '00000001'])).toEqual('0.0.1.1');
    expect(byteArrayToIp(['00000000', '00000001', '00000000', '00000001'])).toEqual('0.1.0.1');
    expect(byteArrayToIp(['00000011', '00000000', '00000000', '00000001'])).toEqual('3.0.0.1');
  });

  it('should be able to convert a 32 bit unsigned integer to an IP address', () => {
    expect(int32ToIp(1)).toEqual('0.0.0.1');
    expect(int32ToIp(256)).toEqual('0.0.1.0');
    expect(int32ToIp(257)).toEqual('0.0.1.1');
  });
});
