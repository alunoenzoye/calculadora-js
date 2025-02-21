function calcularNumero() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operador = document.getElementById("operador").value;

    let resultado;

    switch(operador) {
        case "soma":
            resultado = numero1 + numero2;
            break;
        case "sub":
            resultado = numero1 - numero2;
            break;
        case "div":
            if (numero2 === 0) {
                resultado = "Não é possível fazer divisão por 0!";
            } else{
                resultado = numero1 / numero2;
            }
            break;
        case "mult":
            resultado = numero1 * numero2;
            break;
        case "potencia":
            resultado = Math.pow(numero1, numero2);
            break;
        case "porcentagem":
            resultado = (numero1 * numero2) / 100;
            break;
        default:
            resultado = "operador inválido!";
            break;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}