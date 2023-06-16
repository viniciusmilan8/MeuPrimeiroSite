// Implementação das funcionalidades da calculadora
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Implementação das funcionalidades do cálculo de IMC
function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = peso / (altura * altura);
    const resultadoIMC = document.getElementById('resultado-imc');
    resultadoIMC.textContent = 'Seu IMC é: ' + resultado.toFixed(2);
}

// Implementação das funcionalidades do formulário e geração de JSON
function gerarJSON() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    };

    const jsonOutput = document.getElementById('json-output');
    jsonOutput.textContent = JSON.stringify(data, null, 2);
}

function changePage(pageId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    let selectedSection;

    if (pageId === 'home') {
        selectedSection = document.getElementById('calculadora');
    } else {
        selectedSection = document.getElementById(pageId);
    }

    selectedSection.style.display = 'block';
}
