// Implementação das funcionalidades da calculadora
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Função para adicionar um operador ao visor da calculadora
function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

// Função para realizar o cálculo da expressão no visor da calculadora
function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    if(result == undefined){
        return;
    }
    display.value = result;
}

// Funcionalidades do menu
function changePage(pageId) {
    const pages = document.getElementsByTagName('section');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    const menuItems = document.getElementsByClassName('nav-link');
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }

    const pageToShow = document.getElementById(pageId);
    pageToShow.style.display = 'block';

    const menuItem = document.querySelector(`[onclick="changePage('${pageId}')"]`);
    menuItem.classList.add('active');
}

// Cálculo de IMC
function calcularIMC() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    const imc = peso / (altura * altura);
    let resultado = '';

    if(!imc){
        return;
    }

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
    } else if (imc >= 24.9 && imc < 30) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }

    const resultadoIMC = document.getElementById('resultado-imc');
    resultadoIMC.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
}

// Geração de JSON a partir do formulário
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
    jsonOutput.innerText = JSON.stringify(data, null, 2);
}

// Função para apagar valores na calculadora
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Limpar dados no gerador de JSon
function limparDados() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('json-output').textContent = '';
}

  // Função para definir a tela inicial como "calculadora"
  function setInitialPage() {
    changePage('calculadora');
  }

  // Chamar a função setInitialPage quando a página for carregada
  window.addEventListener('DOMContentLoaded', setInitialPage);
