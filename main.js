function reverseString(str) {
  String(str);
  var splitString = str.split('');
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join('');
  return joinArray;
}

function DecToBin(val1) {
  var decimal = val1;
  var binario = '';
  while (decimal >= 1) {
    var resto = decimal % 2;
    binario += resto.toString();
    decimal = Math.floor(decimal / 2);
  }

  return binario;
}

function BinToDec(val1) {
  var binario = reverseString(val1);
  var decimal = 0;
  for (var i = 0; i <= binario.length; i++) {
    console.log(binario.length);
    if (binario.charAt(i) == 1) {
      decimal += Math.pow(2, i);
    }
  }

  return decimal;
}

function HexToBin(val1) {
  var hexbin = [
      ['0000', '0'],
      ['0001', '1'],
      ['0010', '2'],
      ['0011', '3'],
      ['0100', '4'],
      ['0101', '5'],
      ['0110', '6'],
      ['0111', '7'],
      ['1000', '8'],
      ['1001', '9'],
      ['1010', 'A'],
      ['1011', 'B'],
      ['1100', 'C'],
      ['1101', 'D'],
      ['1110', 'E'],
      ['1111', 'F'],
  ];
  var binario = '';
  for (var i = 0; i < val1.length; i++) {
    for (var ii = 0; ii < hexbin.length; ii++) {
      if (val1.charAt(i) == hexbin[ii][1]) {
        binario += hexbin[ii][0];
      }
    }
  }

  return binario;
}

function operar() {
  val1 = document.getElementById('val1').value;
  if (document.getElementById('DecToBin').selected) {
    var resultado = DecToBin(val1);
    document.getElementById('article').value = reverseString(resultado);
  }

  if (document.getElementById('BinToDec').selected) {
    var resultado = BinToDec(val1);
    document.getElementById('article').value = resultado;
  }

  if (document.getElementById('HexToBin').selected) {
    var resultado = HexToBin(val1);
    document.getElementById('article').value = resultado;
  }

  if (document.getElementById('HexToDec').selected) {
    var binario = HexToBin(val1);
    var resultado = BinToDec(binario);
    document.getElementById('article').value = resultado;
  }
}
