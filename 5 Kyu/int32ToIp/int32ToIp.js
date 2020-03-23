// Take the following IPv4 address: 128.32.10.1

// This address has 4 octets where each octet is a single byte (or 8 bits).

//     1st octet 128 has the binary representation: 10000000
//     2nd octet 32 has the binary representation: 00100000
//     3rd octet 10 has the binary representation: 00001010
//     4th octet 1 has the binary representation: 00000001

// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

// Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

function int32ToIp(int32){
  return int32ToBinary(int32);
}

function int32ToBinary(int32){
  return (int32 >>> 0).toString(2).padStart(32, 0);
}

function binaryToByteArray(binaryNum){
  return [binaryNum.slice(0, 8), binaryNum.slice(8, 16), binaryNum.slice(16, 24), binaryNum.slice(24)];
}

function byteToInt(byte){
  return parseInt(byte, 2);
}

function byteArrayToIp(byteArray){
  let result = '';
  byteArray.forEach((byte, i) => {
    result += byteToInt(byte).toString();
    if(i < byteArray.length - 1) {
      result += '.';
    }
  });
  return result;
}

module.exports = { int32ToIp, int32ToBinary, binaryToByteArray, byteToInt, byteArrayToIp };
