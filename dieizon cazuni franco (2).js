execicio 01 
function delay(ms) 
    return new Promise(resolve => setTimeout(resolve, ms));


// Função assíncrona getNumber
async function getNumber() 
    // Gera um número aleatório entre 0 e 1
    let number = Math.random();
    
    // Espera 1 segundo (1000 milissegundos)
    await delay(1000);
    
    // Multiplica o número por 100
    number *= 100;


exercicio 02

// Função que retorna uma Promise resolvida após um determinado tempo
function delay(ms) 
    return new Promise(resolve => setTimeout(resolve, ms));


// Função assíncrona sum
async function sum(secondValue) 
    // Valor fixo
    const firstValue = 70;

    // Espera 1 segundo (1000 milissegundos)
    await delay(1000);

    // Calcula a soma
    const result = firstValue + secondValue;

    // Retorna o resultado
    return result;


// Exemplo de uso da função sum
sum(30).then{result =>} 
    console.log(result); // Exibe 100 após 1 segundo (70 + 30)


exercicio 03


async function divide(dividend, divisor) 
    if (divisor === 0) 
        // Rejeita a Promise com um erro se o divisor for zero
        throw new Error('Divisor não pode ser zero.');
    
    
    // Retorna o resultado da divisão
    return dividend / divisor;


// Exemplo de uso da função divide com tratamento de erro
async function runDivision() {
    try {
        // Tenta dividir os números
        const result = await divide(10, 2);
        console.log('Resultado:', result); // Exibe o resultado da divisão (5)
    } catch (error) 
        // Captura e exibe o erro se houver
    


// Exemplo de chamada da função com divisor zero para demonstrar o erro
runDivision();

async function runDivisionWithError() 
    try {
        // Tenta dividir os números com divisor zero
        const result = await divide(10, 0);
        console.log('Resultado:', result);
    } catch (error) 
        // Captura e exibe o erro se houver
        console.error('Erro:', error.message); // Exibe "Erro: Divisor não pode ser zero."
    


// Chama a função que demonstra o erro
runDivisionWithError();

exercicio 04

// Função assíncrona que simula a obtenção de dados do tipo A
async function fetchDataA() 
    // Simula um atraso de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));
    return 'Dados do Tipo A';}

// Função assíncrona que simula a obtenção de dados do tipo B
async function fetchDataB() 
    // Simula um atraso de 3 segundos
    await new Promise(resolve => setTimeout(resolve, 3000));
    return 'Dados do Tipo B';}

// Função que usa Promise.all para obter ambos os resultados simultaneamente
async function getAllData() 
    try 
        const [dataA, dataB] = await Promise.all([fetchDataA(), fetchDataB()]);
        console.log('Resultado de fetchDataA:', dataA);
        console.log('Resultado de fetchDataB:', dataB);
     catch (error) 
        console.error('Erro:', error.message);
    
        execicio 05


        // Função que simula um atraso
function delay(ms) 
    return new Promise(resolve => setTimeout(resolve, ms));

// Função assíncrona que simula um processo de três etapas encadeadas
async function processSequential() {
    console.log('Início do Processo');

    // Etapa 1
    console.log('Iniciando Etapa 1');
    await delay(1000); // Atraso de 1 segundo
    console.log('Etapa 1 Completa');

    // Etapa 2
    console.log('Iniciando Etapa 2');
    await delay(1000); // Atraso de 1 segundo
    console.log('Etapa 2 Completa');

    // Etapa 3
    console.log('Iniciando Etapa 3');
    await delay(1000); // Atraso de 1 segundo
    console.log('Etapa 3 Completa');

    console.log('Processo Completo');


// Chama a função para iniciar o processo
processSequential();


exercicio  06

// Função que simula uma operação assíncrona de multiplicar um número por 2
async function multiplyByTwo(number) {
    // Simula um atraso de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
    return number * 2;}

// Função assíncrona que multiplica cada número do array por 2
async function multiplyArrayElements(array) 
    // Mapeia o array para criar um array de Promises
    const promises = array.map(num => multiplyByTwo(num));
    
    // Aguarda todas as Promises serem resolvidas e retorna o novo array
    return Promise.all(promises);


// Exemplo de uso da função multiplyArrayElements
async function run() 
    const numbers = [1, 2, 3, 4, 5];
    const result = await multiplyArrayElements(numbers);
    console.log(result); // Exibe o novo array com os números multiplicados por 2


// Chama a função para iniciar o processo
run();

execicio 07


// Função que retorna uma Promise resolvida após um determinado tempo
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));}

// Função assíncrona que simula a contagem regressiva
async function countdown(start) 
    // Enquanto o valor inicial for maior ou igual a 0
    while (start >= 0) {
        console.log(start); // Exibe o número atual
        await delay(1000); // Atraso de 1 segundo
        start--; // Decrementa o número
    
    console.log('Contagem Regressiva Completa!');


// Exemplo de uso da função countdown
countdown(5);

























