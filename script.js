function generarFibonacci() {
    const input = document.getElementById("numFibonacci").value;
    const num = Number(input);

    // Verificar si la entrada es un número
    if (isNaN(num) || num <= 0) {
        alert("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    // Generar la serie de Fibonacci
    let fibonacci = [0, 1];
    for (let i = 2; i < num; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    // Mostrar el resultado en el DOM
    document.getElementById("resultado").innerText = fibonacci.slice(0, num).join(", ");
}
