# Calculadora ET403 · Semana 9[cite: 2]

Trabajo grupal. Calculadora con suma y división (originales de la semana 7), resta, multiplicación y un conversor de unidades (m ↔ cm, kg ↔ g).[cite: 2]

## Integrantes[cite: 2]

* Celica Puancha[cite: 2]
* Juan Pablo [cite: 2]
* Daniela Alexandra[cite: 2]
* Juan Antonio[cite: 2]
* Sugka Eleodan [cite: 2]
* Harumi Chuintam[cite:2]

## Enlaces[cite: 2]

1. Sitio publicado (página de GitHub donde se subió el proyecto):  https://jasc-117.github.io/ET403-Semana9-Grupo2---Maxedra/. [cite: 2]
2. Repositorio: https://github.com/JASC-117/ET403-Semana9-Grupo2---Maxedra. [cite: 2]

## Estructura del proyecto[cite: 2]

| Archivo | Contenido |
| :--- | :--- |
| `index.html` | Estructura (calculadora y conversor) |
| `styles.css` | Estilos y personalización |
| `app.js` | Lógica: calculadora, lista `CONVERSIONES` y función `convertir` |
| `README.md` | Este documento |

## Uso

1. **Calculadora:** escriba dos valores, elija la operación (Sumar, Restar, Multiplicar o Dividir) y pulse *Calcular* (o Enter).[cite: 3]
2. **Conversor:** escriba un valor, elija la conversión y pulse *Convertir* (o Enter).[cite: 3]
3. Se rechazan: campo vacío, texto o valor no finito. En el conversor también los valores negativos. En la división, el divisor cero.[cite: 3]

## Cómo está hecho el conversor[cite: 3]

* Los **datos** están en una lista de objetos `CONVERSIONES` (id, etiqueta, unidad de origen, unidad de destino, factor y si es inversa).[cite: 3]
* El **cálculo** lo hace la función `convertir(texto, id)` : valida la entrada y multiplica o divide por el factor.[cite: 3]
* No se usa un archivo JSON externo: la lista representa los datos y JavaScript ejecuta el cálculo.[cite: 3]

## Personalización (CSS)[cite: 3]

* Etiqueta modificada: `<label for="a">` cambió de "Primer dato" a "Primer valor".[cite: 3]
* Tamaño por CSS: `label[for="a"] { font-size: 1.5rem; }` (antes 22 px heredado).[cite: 3]
* Paleta elegida: azul **RGB(30, 64, 175)**.[cite: 3]
  * Texto blanco **RGB(255, 255, 255)** sobre botones: contraste ≈ 8.7:1, legible.[cite: 3]
  * Fondo de resultados: **RGB(238, 243, 248)**.[cite: 3]
  * Error: **RGB(185, 28, 28)** sobre **RGB(254, 242, 242)**.[cite: 3]

## Pruebas realizadas[cite: 3]

| Caso | Esperado | Resultado |
| :--- | :--- | :--- |
| 1 m → cm | 100 | OK |
| 100 cm → m | 1 | OK |
| 1 kg → g | 1000 | OK |
| 1000 g → kg | 1 | OK |
| 0 → 0 | 0 | OK |
| 1.5 m → cm | 150 | OK |
| Campo vacío (conversor) | Rechazado | OK |
| Negativo (conversor) | Rechazado | OK |
| 12 + 3 | 15 | OK |
| 12 ÷ 3 | 4 | OK |
| Calculadora con campo vacío | "Complete las dos entradas." | OK |
| Calculadora con texto | "Escriba números válidos..." | OK |
| 5 ÷ 0 | "No se puede dividir entre cero." | OK |

Las pruebas se ejecutaron con `node pruebas.js` y también manualmente en el navegador.[cite: 4]

## Aportes del grupo[cite: 4]
| Integrante | Aporte |
|---|---|
| Celica Puancha Mariaco (Líder) | Coordinó al grupo, lideró la programación de los TODOs en el código, supervisó la estructura general del trabajo, revisó los resultados, subieron los archivos al repositorio y publicaron el sitio en GitHub Pages. |
| Juan Pablo Yandel Irigoin Arbañil | Separó el proyecto en `index.html` , `styles.css` y `app.js` , guardó la copia del `index.html` original. Apoyó en la lógica de validación de datos (vacío, texto y divisor cero) y pruebas en el navegador. |
| Daniela Alexandra Heredia Saldaña | Programó el conversor: la lista de objetos `CONVERSIONES` y la función `convertir` , con rechazo de campo vacío, valor no finito y negativo[cite: 5]. Realizó el registro y llenado completo de la tabla de pruebas. |
| Harumi Chuintam Samekash | Redactó la explicación del flujo de datos y el propósito del trabajo, además de ejecutar y registrar las pruebas del conversor y de las operaciones originales. |
| Juan Antonio Sanches Cabanillas | Verificó la corrección de errores numéricos, validó el manejo robusto de excepciones y controló detalladamente la prevención de división entre cero. |
| Sugka Eleodan Ugkum Majuash | Redactó el README (uso, enlaces, aportes), documentó los valores de la paleta y el cambio de la etiqueta. Redactó las conclusiones y preparó la exportación final a PDF. |
