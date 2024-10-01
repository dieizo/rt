


  NOME: DIEIZON CAZUNI FRANCO 


import math


class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return math.pi * (self.raio ** 2)

    def calcular_perimetro(self):
        return 2 * math.pi * self.raio

# Exemplo de uso
circulo = Circulo(5)
print(f"Área: {circulo.calcular_area():.2f}")
print(f"Perímetro: {circulo.calcular_perimetro():.2f}")



class ContaBancaria:
    def __init__(self, numero_conta, nome_titular, saldo_inicial=0):
        self.numero_conta = numero_conta
        self.nome_titular = nome_titular
        self.saldo = saldo_inicial

    def depositar(self, valor):
        if valor > 0:
            self.saldo += valor
            print(f"Depósito de R${valor:.2f} realizado com sucesso. Novo saldo: R${self.saldo:.2f}")
        else:
            print("O valor do depósito deve ser positivo.")

    def sacar(self, valor):
        if valor > 0:
            if valor <= self.saldo:
                self.saldo -= valor
                print(f"Saque de R${valor:.2f} realizado com sucesso. Novo saldo: R${self.saldo:.2f}")
            else:
                print("Saldo insuficiente para realizar o saque.")
        else:
            print("O valor do saque deve ser positivo.")

    def consultar_saldo(self):
        print(f"Saldo atual: R${self.saldo:.2f}")

# Exemplo de uso
conta = ContaBancaria("12345-6", "João Silva", 1000)
conta.consultar_saldo()

# Exemplo de uso
conta = ContaBancaria("12345-6", "João Silva", 1000)
conta.consultar_saldo()
conta.depositar(500)
conta.sacar(300)
conta.consultar_saldo()
conta.sacar(1500)  # Tentativa de saque maior que o saldo

class Retangulo:
    def __init__(self, largura, altura):
        self.largura = largura
        self.altura = altura

    def calcular_area(self):
        return self.largura * self.altura

    def calcular_perimetro(self):
        return 2 * (self.largura + self.altura)

# Exemplo de uso
retangulo = Retangulo(5, 10)
print(f"Área: {retangulo.calcular_area()} unidades²")
print(f"Perímetro: {retangulo.calcular_perimetro()} unidades")





    def __init__(self, nome, matricula, notas):
        self.nome = nome
        self.matricula = matricula
        self.notas = notas  # Espera-se que seja uma lista de notas

    def calcular_media(self):
        if not self.notas:
            return 0
        return sum(self.notas) / len(self.notas)

    def verificar_situacao(self):
        media = self.calcular_media()
        if media >= 7:
            return "Aprovado"
        elif media >= 5:
            return "Recuperação"
        else:
            return "Reprovado"

# Exemplo de uso
aluno = Aluno("Maria Silva", "2023001", [7.5, 8.0, 6.5])
print(f"Nome: {aluno.nome}")
print(f"Matrícula: {aluno.matricula}")
print(f"Média: {aluno.calcular_media():.2f}")
print(f"Situação: {aluno.verificar_situacao()}")


● Crie uma classe chamada “Funcionário” com atributos para armazenar o
nome, o salário e o cargo do funcionário. Implemente métodos para calcular o
salário líquido, considerando descontos de impostos e benefícios.


class Funcionario:
    def __init__(self, nome, salario_bruto, cargo):
        self.nome = nome
        self.salario_bruto = salario_bruto
        self.cargo = cargo

    def calcular_salario_liquido(self, impostos=0.1, beneficios=0.05):
        """
        Calcula o salário líquido com base em impostos e benefícios.
        :param impostos: percentual de impostos a ser descontado (default: 10%)
        :param beneficios: percentual de benefícios a ser descontado (default: 5%)
        :return: salário líquido
        """
        desconto_impostos = self.salario_bruto * impostos
        desconto_beneficios = self.salario_bruto * beneficios
        salario_liquido = self.salario_bruto - (desconto_impostos + desconto_beneficios)
        return salario_liquido

# Exemplo de uso
funcionario = Funcionario("Carlos Almeida", 3000, "Desenvolvedor")
salario_liquido = funcionario.calcular_salario_liquido()
print(f"Nome: {funcionario.nome}")
print(f"Cargo: {funcionario.cargo}")
print(f"Salário Bruto: R${funcionario.salario_bruto:.2f}")
print(f"Salário Líquido: R${salario_liquido:.2f}")


class Produto:
    def __init__(self, nome, preco, quantidade_em_estoque):
        self.nome = nome
        self.preco = preco
        self.quantidade_em_estoque = quantidade_em_estoque

    def calcular_valor_total_em_estoque(self):
        """Calcula o valor total do estoque."""
        return self.preco * self.quantidade_em_estoque

    def verificar_disponibilidade(self):
        """Verifica se o produto está disponível em estoque."""
        return self.quantidade_em_estoque > 0

# Exemplo de uso
produto = Produto("Camiseta", 49.90, 20)

valor_total = produto.calcular_valor_total_em_estoque()
disponibilidade = produto.verificar_disponibilidade()

print(f"Produto: {produto.nome}")
print(f"Preço: R${produto.preco:.2f}")
print(f"Quantidade em estoque: {produto.quantidade_em_estoque}")
print(f"Valor total em estoque: R${valor_total:.2f}")
print("Disponível: " + ("Sim" if disponibilidade else "Não"))


import math

class Triangulo:
    def __init__(self, lado_a, lado_b, lado_c):
        self.lado_a = lado_a
        self.lado_b = lado_b
        self.lado_c = lado_c

    def eh_triangulo(self):
        """Verifica se os lados formam um triângulo válido."""
        return (self.lado_a + self.lado_b > self.lado_c and
                self.lado_a + self.lado_c > self.lado_b and
                self.lado_b + self.lado_c > self.lado_a)

    def calcular_area(self):
        """Calcula a área do triângulo usando a fórmula de Heron."""
        if not self.eh_triangulo():
            raise ValueError("Os lados fornecidos não formam um triângulo válido.")
        
        s = (self.lado_a + self.lado_b + self.lado_c) / 2
        area = math.sqrt(s * (s - self.lado_a) * (s - self.lado_b) * (s - self.lado_c))
        return area

# Exemplo de uso
triangulo = Triangulo(3, 4, 5)

if triangulo.eh_triangulo():
    print(f"Área do triângulo: {triangulo.calcular_area():.2f}")
else:
    print("Os lados fornecidos não formam um triângulo válido.")



    class Carro:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.velocidade_atual = 0  # Inicializa a velocidade atual em 0

    def acelerar(self, incremento):
        """Aumenta a velocidade atual do carro."""
        if incremento > 0:
            self.velocidade_atual += incremento
            print(f"Velocidade aumentada para {self.velocidade_atual} km/h.")
        else:
            print("O incremento deve ser positivo.")

    def frear(self, decremento):
        """Diminui a velocidade atual do carro."""
        if decremento > 0:
            self.velocidade_atual -= decremento
            if self.velocidade_atual < 0:
                self.velocidade_atual = 0  # A velocidade não pode ser negativa
            print(f"Velocidade reduzida para {self.velocidade_atual} km/h.")
        else:
            print("O decremento deve ser positivo.")


            class Paciente:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
        self.historico_consultas = []

    def adicionar_consulta(self, data, descricao):
        consulta = {
            'data': data,
            'descricao': descricao
        }
        self.historico_consultas.append(consulta)

    def exibir_historico(self):
        if not self.historico_consultas:
            print(f"{self.nome} não possui consultas registradas.")
            return
        
        print(f"Histórico de consultas de {self.nome}:")
        for consulta in self.historico_consultas:
            print(f"Data: {consulta['data']}, Descrição: {consulta['descricao']}")

# Exemplo de uso
paciente1 = Paciente("João da Silva", 30)
paciente1.adicionar_consulta("2023-09-15", "Consulta de rotina")
paciente1.adicionar_consulta("2023-09-20", "Consulta para dor de cabeça")
paciente1.exibir_historico()

class Livro:
    def __init__(self, titulo, autor, numero_de_paginas):
        self.titulo = titulo
        self.autor = autor
        self.numero_de_paginas = numero_de_paginas
        self.disponivel = True

    def emprestar(self):
        if self.disponivel:
            self.disponivel = False
            print(f"O livro '{self.titulo}' foi emprestado.")
        else:
            print(f"O livro '{self.titulo}' não está disponível para empréstimo.")

    def devolver(self):
        if not self.disponivel:
            self.disponivel = True
            print(f"O livro '{self.titulo}' foi devolvido.")
        else:
            print(f"O livro '{self.titulo}' já está disponível.")

    def verificar_disponibilidade(self):
        return self.disponivel
        # Exemplo de uso
livro1 = Livro("Dom Casmurro", "Machado de Assis", 250)
livro1.emprestar()  # Empresta o livro
livro1.emprestar()  # Tenta emprestar novamente
livro1.devolver()   # Devolve o livro
livro1.devolver()   # Tenta devolver novamente

if livro1.verificar_disponibilidade():
    print(f"O livro '{livro1.titulo}' está disponível.")
else:
    print(f"O livro '{livro1.titulo}' não está disponível.")
    

    class Aluno:
    def __init__(self, nome, matricula):
        self.nome = nome
        self.matricula = matricula
        self.notas = []

    def adicionar_nota(self, nota):
        if 0 <= nota <= 10:
            self.notas.append(nota)
        else:
            print("Nota inválida! A nota deve estar entre 0 e 10.")

    def calcular_media(self):
        if not self.notas:
            return 0
        return sum(self.notas) / len(self.notas)

    def verificar_situacao(self):
        media = self.calcular_media()
        if media >= 6:
            return "Aprovado"
        elif media >= 4:
            return "Em recuperação"
        else:
            return "Reprovado"
            
# Exemplo de uso:
aluno = Aluno("Maria", "2023001")
aluno.adicionar_nota(7.5)
aluno.adicionar_nota(8.0)
aluno.adicionar_nota(5.0)

print(f'Média: {aluno.calcular_media():.2f}')  # Média: 6.17
print(f'Situação: {aluno.verificar_situacao()}')  # Situação: Aprovado 
git ad
