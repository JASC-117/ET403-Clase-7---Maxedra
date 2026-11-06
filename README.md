# Calculadora ET403 · Semana 9

Trabajo grupal. Calculadora con suma y división (originales de la semana 7), resta, multiplicación y un conversor de unidades (m ↔ cm, kg ↔ g).

## Integrantes

* Celica Puancha Mariaco
* Juan Pablo Yandel Yrigoin Arbañil
* Daniela Alexandra Heredia Saldaña
* Harumi Chuintam Samekash
* Juan Antonio Sanches Cabanillas
* Sugka Eleodan Ugkum Majuash

## Enlaces

1. **Sitio publicado (página de GitHub donde se subió el proyecto):** https://jasc-117.github.io/ET403-Semana9-Grupo2---Maxedra/
2. **Repositorio de GitHub:** https://github.com/JASC-117/ET403-Semana9-Grupo2---Maxedra

## Estructura del proyecto

| Archivo | Contenido |
| :--- | :--- |
| `index.html` | Estructura (calculadora y conversor) |
| `styles.css` / `CSS - Personalizacion.css` | Estilos y personalización |
| `app.js` / `conversor.js` | Lógica: calculadora, lista `CONVERSIONES` y función `convertir` |
| `README.md` | Este documento |

## Uso

1. **Calculadora:** escriba dos valores, elija la operación (Sumar, Restar, Multiplicar o Dividir) y pulse *Calcular* (o Enter).
2. **Conversor:** escriba un valor, elija la conversión y pulse *Convertir* (o Enter).
3. **Se rechazan:** campo vacío, texto o valor no finito. En el conversor también los valores negativos. En la división, el divisor cero.

## Cómo está hecho el conversor

* Los **datos** están en una lista de objetos `CONVERSIONES` (id, etiqueta, unidad de origen, unidad de destino, factor y si es inversa).
* El **cálculo** lo hace la función `convertir(texto, id)`: valida la entrada y multiplica o divide por el factor.
* No se usa un archivo JSON externo: la lista representa los datos y JavaScript ejecuta el cálculo.

## Personalización (CSS)

* **Etiqueta modificada:** `<label for="a">` cambió de "Primer dato" a "Primer valor".
* **Tamaño por CSS:** `label[for="a"] { font-size: 1.5rem; }` (antes 22 px heredado).
* **Paleta elegida:** azul **RGB(30, 64, 175)**.
  * Texto blanco **RGB(255, 255, 255)** sobre botones: contraste ≈ 8.7:1, legible.
  * Fondo de resultados: **RGB(238, 243, 248)**.
  * Error: **RGB(185, 28, 28)** sobre **RGB(254, 242, 242)**.

## Pruebas realizadas

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

## Aportes del grupo y reporte de ejecuciones

| Integrante | Rol asignado | Aporte técnico, ejecución y control de errores |
| :--- | :--- | :--- |
| **Celica Puancha Mariaco** | Líder de Proyecto | Coordinó al grupo, lideró la programación de los TODOs en el código, supervisó la estructura general del trabajo, revisó los resultados, subió los archivos al repositorio y publicó el sitio en GitHub Pages. |
| **Juan Pablo Yandel Yrigoin Arbañil** | Arquitecto de Software | Separó el proyecto en `index.html`, `styles.css` y `app.js`, guardó la copia del `index.html` original. Apoyó en la lógica de validación de datos (vacío, texto y divisor cero) y pruebas en el navegador. *(Ejecutó y validó la corrección para evitar el error nativo de `Infinity` en divisiones)*. |
| **Daniela Alexandra Heredia Saldaña** | Especialista UI/UX | Programó el conversor: la lista de objetos `CONVERSIONES` y la función `convertir`, con rechazo de campo vacío, valor no finito y negativo. Implementó la paleta RGB(30, 64, 175) y realizó el registro y llenado completo de la tabla de pruebas. |
| **Harumi Chuintam Samekash** | Analista QA (Longitud) | Redactó la explicación del flujo de datos y el propósito del trabajo, además de diseñar, ejecutar y registrar las pruebas del conversor (m ↔ cm) y de las operaciones originales. |
| **Juan Antonio Sanches Cabanillas** | Soporte Algorítmico | Verificó la corrección de errores numéricos, validó el manejo robusto de excepciones y controló detalladamente la prevención de división entre cero *(corrigió la propagación previa de valores `NaN` en entradas no válidas)*. |
| **Sugka Eleodan Ugkum Majuash** | Analista QA (Masa / DevOps) | Redactó el `README.md` (uso, enlaces, aportes), documentó los valores de la paleta y el cambio de la etiqueta. Ejecutó las pruebas del módulo de masa (kg ↔ g), redactó las conclusiones y preparó la exportación final a PDF. |
