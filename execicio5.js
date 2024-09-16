function getRandomNumber(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * 1000)
        }, 1000)
    })
}

async function getNumber() {
    const number = await getRandomNumber(7)
    return number
}

getNumber().then(console.log)


function sum(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number + 70)
        }, 1000)
    })
}

async function mySum() {
    const number = await sum(80)
    return number
}

mySum().then(console.log)




function divaide(number,nobe2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number /neber2)
        }, 1000)
    })
}

async function mySum() {
    const number = await sum(80)
    return number
}

mySum().then(console.log)

function sum(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number + 70)
        }, 1000)
    })
}

async function mySum() {
    const number = await sum(80)
    return number
}

mySum().then(console.log)



mySum().then(console.log)


    


async function mySum() {
    const number = await numero(80) dividido por 2
    return number {40}
}

mySum().then(console.log)


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Função assíncrona que simula um processo de três etapas
  async function processoEncadeado() {
    console.log('Início do processo');
  
    console.log('Executando etapa 1...');
    await delay(1000); // Aguarda 1 segundo
    console.log('Etapa 1 concluída');
  
    console.log('Executando etapa 2...');
    await delay(1000); // Aguarda 1 segundo
    console.log('Etapa 2 concluída');
  
    console.log('Executando etapa 3...');
    await delay(1000); // Aguarda 1 segundo
    console.log('Etapa 3 concluída');
  
    console.log('Processo concluído!');
  }
  
  // Exemplo de uso
  processoEncadeado();

    

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Função assíncrona que simula a contagem regressiva
  async function contagemRegressiva(inicio) {
    while (inicio >= 0) {
      console.log(inicio);
      await delay(1000); // Aguarda 1 segundo
      inicio--;
    }
    console.log('Fim!');
  }
  
  // Exemplo de uso
  contagemRegressiva(5);





