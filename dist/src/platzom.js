'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Platzom;
function Platzom(str) {
  var translation = str;
  str = str.toLowerCase();
  // Si la palabra termina en 'ar', se le quita esos dos caracteres
  if (str.endsWith('ar')) {
    translation = translation.slice(0, -2);
  }

  // Si la palabra inicia con Z, se le añade 'pe' al final
  if (str.startsWith('z')) {
    translation = translation.concat('pe');
  }

  // Si la palabra traducida tiene 10 o mas carateres, entonces se parte a la mitad y se unen las mitades con un guion medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  // Si la palabra original es un Palíndromo, entonces no se tiene en cuenta las reglas anteriores y se devuelve la misma palabra
  // pero intercalando mayúsculas y minúsculas

  var reverse = function reverse(str) {
    var invertida = '';
    invertida = str.split('').reverse().join('');
    return invertida;
  };

  var minMay = function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  };

  if (str === reverse(str)) {
    return minMay(str);
  }

  return translation;
}