function ComisionCredito() {
    var valor = document.getElementById("inputCredito").value;
    document.getElementById("labelComisionCredito").innerHTML = Number.parseFloat(calcularComision(valor, 2.16)).toFixed(2);
    document.getElementById("labelTotalCredito").innerHTML = Number.parseFloat(calcularComision(valor, 2.16) + parseInt(valor)).toFixed(2);
}

function ComisionDebito() {
    var valor = document.getElementById("inputDebito").value;
    document.getElementById("labelComisionDebito").innerHTML = Number.parseFloat(calcularComision(valor, 1.86)).toFixed(2);
    document.getElementById("labelTotalDebito").innerHTML = Number.parseFloat(calcularComision(valor, 1.86) + parseInt(valor)).toFixed(2);
}

function calcularComision(valor, comision) {
    return comision * (valor / 100);

}
