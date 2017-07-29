const expect = require('chai').expect
const platzom = require('..').default // al colocar .. va a package.json y busca el contenido de main.

describe('#platzom', function () {
  it('Si la palabra termina con "ar", se le quitan esas dos letras', function() {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  
  it('Si la palabra inicia con Z, se le añade "pe" al final', function() {
    const translation = platzom("Zorro")
    expect(translation).to.equal("Zorrope")
  })
  
  it('Si la palabra traducida tiene 10 o más letras, se debe partir en 2 y unir con un guión medio', function() {
    const translation = platzom("Abecedario")
    expect(translation).to.equal("Abece-dario")
  })
  
  it('Por último, si la palabra original es un paíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function() {
    
    const translation = platzom("Sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})