"use strict";

// --- LÓGICA DE LA CALCULADORA (Semana 7) ---
document.getElementById("calcular").addEventListener("click", function (e) {
  e.preventDefault();
  
  const textoA = document.getElementById("a").value.trim();
  const textoB = document.getElementById("b").value.trim();
  const operacion = document.getElementById("operacion").value;
  const salida = document.getElementById("resultado");

  if (textoA === "" || textoB === "") {
    salida.textContent = "Complete las dos entradas.";
    return;
  }

  const a = Number(textoA);
  const b = Number(textoB);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    salida.textContent = "Escriba números válidos en ambas entradas.";
    return;
  }

  if (operacion === "dividir" && b === 0) {
    salida.textContent = "No se puede dividir entre cero.";
    return;
  }

  if (operacion === "sumar") {
    salida.textContent = "Suma: " + (a + b);
  } else {
    salida.textContent = "División: " + (a / b);
  }
});


// --- LÓGICA DEL CONVERSOR DE UNIDADES (Semana 9) ---
const conversiones = [
  { id: "m-cm", nombre: "Metros a centímetros", factor: 100, unidadSingular: "centímetro", unidadPlural: "centímetros" },
  { id: "cm-m", nombre: "Centímetros a metros", factor: 0.01, unidadSingular: "metro", unidadPlural: "metros" },
  { id: "kg-g", nombre: "Kilogramos a gramos", factor: 1000, unidadSingular: "gramo", unidadPlural: "gramos" },
  { id: "g-kg", nombre: "Gramos a kilogramos", factor: 0.001, unidadSingular: "kilogramo", unidadPlural: "kilogramos" }
];

function convertir(valor, id) {
  if (String(valor).trim() === "") throw new Error("Escriba un valor.");
  const numero = Number(valor), opcion = conversiones.find(x => x.id === id);
  if (!Number.isFinite(numero) || numero < 0) throw new Error("Use un número finito, mayor o igual a cero.");
  if (!opcion) throw new Error("Seleccione una conversión.");
  
  const resultado = numero * opcion.factor;
  if (!Number.isFinite(resultado)) throw new Error("El resultado excede el rango admitido.");
  
  const unidad = (resultado === 1) ? opcion.unidadSingular : opcion.unidadPlural;
  
  return {
    valorFormatted: resultado.toLocaleString("es-PE", { maximumFractionDigits: 8 }),
    unidad: unidad
  };
}

if (typeof document !== "undefined") {
  const selector = document.getElementById("conv-operacion");
  
  conversiones.forEach(x => {
    const o = document.createElement("option");
    o.value = x.id;
    o.textContent = x.nombre;
    selector.append(o);
  });

  document.getElementById("conv-form").addEventListener("submit", e => {
    e.preventDefault();
    const salida = document.getElementById("conv-salida");
    try {
      const res = convertir(document.getElementById("conv-valor").value, selector.value);
      salida.textContent = "Resultado: " + res.valorFormatted + " " + res.unidad;
    } catch (error) {
      salida.textContent = error.message;
    }
  });
}
