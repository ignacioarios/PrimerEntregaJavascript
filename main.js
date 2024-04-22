/*Se pide aceptar terminos y condiciones, luego te saluda y te permite calcular que medio de pago es mas conveniente para los usd de la tarjeta*/
function aceptarTym() {
    const aceptarTym = confirm("¿Acepta los terminos y condiciones?");
  
    if (aceptarTym) {
      console.log("¡Gracias por aceptar los terminos y condiciiones!");
      
    } else {
      console.log("Lamentamos que no acepte los terminos y condiciones. Hasta luego");
    }
  }
  aceptarTym();

  function saludar() {
    const nombre = prompt("Ingrese su nombre:");
    console.log(`¡Hola ${nombre}! Bienvenid@ a la Calculadora Dolar Tarjeta`);
  }
  saludar();

function calcularDolarTarj(){
    const usdPagar = prompt ("Ingrese el valor de USD que debe en su tarjeta de credito:")
    const valorUsd = parseFloat(usdPagar);
    const USDtarjeta = 1460.38;
    const USDmep = 1024.35;
    const valorMep = valorUsd * USDmep;
    const valorDebito = valorUsd * USDtarjeta;
    const diferencia = valorDebito - valorMep;
    console.log(
        `Pagando con Dólar MEP  el costo sería de $${valorMep.toFixed(2)} vs el costo dejando que se debite sería de $${valorDebito.toFixed(2)}. El ahorro que usted haría pagando con MEP el dia 22/4/2024 es de $${diferencia.toFixed(2)}.`
      );
    }
    
    calcularDolarTarj();