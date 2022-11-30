 // criação de uma array e  colocando os numeros das questoes, as questoes, a reposta correta e todas as opções de respostas 
let questions = [
    {
    numb: 1,
    question: "Na instrução Python: x = a + 5 - b: a e b são________ a + 5 - b é________",
    answer: "Operandos, uma expressão",
    options: [
      "Termos, um grupo",
      "Operandos, uma expressão",
      "Operandos, uma equação",
      "Operadores, uma declaração"
    ]
  },
    {
    numb: 2,
    question: "Qual é o valor da expressão 100 / 25??",
    answer: "4.0",
    options: [
      "125",
      "4.0",
      "4",
      "250"
    ]
  }, 
    {
    numb: 3,
    question: "Você deve usar o == operador para determinar se os objetos do tipo float são iguais?",
    answer: "Não, não é uma boa ideia.",
    options: [
      "Claro! Vá em frente.",
      "Não, não é uma boa ideia."
    ]
  },
    {
    numb: 4,
    question: "Qual operador lógico utilizado para verificar de dois valores são diferentes?",
    answer: "!=",
    options: [
      "==",
      "≠",
      "!=",
      ">="
    ]
  },
    {
    numb: 5,
    question: "Qual valor da expressão 20%6?",
    answer: "2",
    options: [
      "2",
      "5",
      "26",
      "6"
    ]
  },
    {
    numb: 6,
    question: "Qual será o valor da expressão 2**3?",
    answer: "8",
    options: [
      "6",
      "8",
      "5",
      "10"
    ]
  },
    {
    numb: 7,
    question: "De acordo com a relação de operadores abaixo. Qual é a sequência correta do nomes? + - * / ** %",
    answer: "Adição Subtração Multiplicação Divisão Potenciação Resto",
    options: [
      "Adição Subtração Multiplicação Divisão Resto Potenciação",
      "Adição Subtração Multiplicação Divisão Potenciação Resto",
      "Adição Subtração Multiplicação Potenciação Divisão Resto"
    ]
  },
    {
    numb: 8,
    question: "De acordo com os operadores relacionais, como é feita a leitura. == != > < >= <=",
    answer: "Igual a Diferente de Maior que Menor que Maior ou igual Menor ou igual",
    options: [
      " Diferente de Igual a Maior que Menor que Maior ou igual Menor ou igual",
      "Igual a Diferente de Maior que Menor que Maior ou igual Menor ou igual",
      "Diferente de Igual a Menor que Maior que Maior ou igual Menor ou igual"
    ]
  },
  {
    numb: 9,
    question: "Analisando o código abaixo, selecione o código correto:",
    answer: "n1 = float(input('Digite o primero numero: ')) if n1 < 0: print ('O numero é negativo') else: print ('O numero é positivo')",
    options: [
      "n1 = float(input('Digite o primero numero: ')) if n1 > 0: print ('O numero é negativo') else: print ('O numero é positivo')",
      "n1 = float(input('Digite o primero numero: ')) if n1 < 0: print ('O numero é negativo') else: print ('O numero é positivo')"
    ]
  },
  {
    numb: 10,
    question: "Qual destes é um comando de entrada?",
    answer: "input()",
    options: [
      "int()",
      "if()",
      "input()",
      "float()",
      "print()"
    ]
  },
  // a gente pode adicionar outras perguntas, o exeplo ta embaixo, só descomentar (pode colocar quantas quisermos)
  // temos que colocar a ordem correta: a ultima foi a pergunta 5, a proxima 6, 7, 8, 9,...

  //   {
  //   numb: 6,
  //   question: "a pergunta fica aqui",
  //   answer: "a resposta correta fica aqui",
  //   options: [
  //     "opção 1",
  //     "opção 2",
  //     "opção 3",
  //     "opção 4"
  //   ]
  // },
];