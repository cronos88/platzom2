export default function platzom (str) {
  let translation = str
  str = str.toLowerCase()
  // Si la palabra termina en 'ar', se le quita esos dos caracteres
  if (str.endsWith('ar')) {
    translation = translation.slice(0, -2)
  }

  // Si la palabra inicia con Z, se le añade 'pe' al final
  if (str.startsWith('z')) {
    translation = translation.concat('pe')
  }

  // Si la palabra traducida tiene 10 o mas carateres, entonces se parte a la mitad y se unen las mitades con un guion medio
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  // Si la palabra original es un Palíndromo, entonces no se tiene en cuenta las reglas anteriores y se devuelve la misma palabra
  // pero intercalando mayúsculas y minúsculas

  const reverse = (str) => {
    let invertida = ''
    invertida = str.split('').reverse().join('')
    return invertida
  }

  const minMay = (str) => {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if (str === reverse(str)) {
    return minMay(str)
  }

  return translation
}
