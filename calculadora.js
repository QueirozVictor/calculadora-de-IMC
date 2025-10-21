function CalcularIMC(){
    //Entrada
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    
//Processamento
    let alturametros = altura / 100;

    let IMC = peso / (alturametros * alturametros);

        let classificação = "";
        let cor = "";

    if (IMC < 18.5) {
        classificação = "Abaixo do Peso";
        cor = "green";
    }

    else if (IMC < 24.9) {
        classificação = "Peso Normal";
        cor = "blue";
        
    }
    else if (IMC < 29.9) {
        classificação = "Sobrepeso";
        cor = "red";
    }
    else if (IMC < 34.9) {
        classificação = "Obesidade grau 1";
        cor = "#89fc00";
    }
    else if (IMC < 39.9) {
        classificação = "Obesidade grau 2";
        cor = "yellow";
    }
    else {
        classificação = "Obesidade grau 3";
        cor = "black";
    }

//Saida
    document.getElementById("Resultado").textContent = " Valor do IMC: " + IMC.toFixed(1);
    const elemento = document.getElementById("classificacao");
    elemento.textContent = "Classificação: " + classificação;
    elemento.style.color = cor;
}
