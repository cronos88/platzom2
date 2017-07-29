# Platzom2

Platzom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar en educación online.

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras, se debe partir en 2 y unir con un guión medio.
- Por último, si la palabra original es un paíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.

## Instalación 

```
npm install platzom2
```

## Uso

```
import platzom from 'platzom2'

platzom("Programar") // Program
platzom("zorro") // Zorrope
platzom("zarpar") // Zarppe
platzom("abecedario") // abede-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Carlos Millán](https://twitter.com/reactdevelop)

## Licencia
[MIT](https://opensource.org/licenses/MIT)