
// Buscamos las id

const n1 = document.getElementById("numero_uno");
const n2 = document.getElementById("numero_dos");
const cajaResultado = document.getElementById("resultado");
  


function calcular(){


// 1. Convertir  textos en números enteros (si están vacíos, valdrán 0)
    let valorUno = parseInt(n1.value) || 0;
    let valorDos = parseInt(n2.value) || 0;

// 2. Averiguamos cuál es el número más pequeño y cuál el más grande
    // Esto evita que el código se rompa si pones los números al revés
    let inicio = Math.min(valorUno, valorDos);
    let fin = Math.max(valorUno, valorDos);

// 3. Inicializamos tu variable 'operacion' en 0
    let operacion = valorUno;

// 4. El 'for' corre de forma segura desde el menor hasta el mayor
    for (let i = inicio; i <= fin; i++) {
        operacion = operacion + i; 

        
    }

    //6.se muestra resultado
cajaResultado.innerHTML = "el resultado es " + operacion;

   
    };






