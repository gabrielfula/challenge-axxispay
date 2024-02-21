# Challenge Desenvolvedor Júnior
#### Desafio
Utilizando a linguagem de sua escolha, crie um algoritmo que dado um array de strings no formato JSON conforme exemplo abaixo, retorne um novo JSON Array formado pelos anagramas encontrados no array original:

Exemplo:
JSON de Entrada
 [ 
   { "str": "amor" },
   { "str": "roma" },
   { "str": "padre" },
   { "str": "ignorado" },
   { "str": "bolo" },
   { "str": "rota" },
   { "str": "nada" },
   { "str": "ator" },
   { "str": "lobo" },
   { "str": "pedra" }
 ]
 
JSON de Saída
[ 
   { "anagramas": ["amor", "roma"] },
   { "anagramas": ["padre", "pedra"] },
   { "anagramas": ["bolo", "lobo"] },
   { "anagramas": ["rota", "ator"] }
]   
Atenção: A resposta deve estar na ORDEM em que os termos aparecem.

### Entrega
Documentar todo o processo de investigação para o desenvolvimento da atividade (README.md no seu repositório); os resultados destas tarefas são tão importantes do que o seu processo de pensamento e decisões à medida que as completa, por isso tente documentar e apresentar os seus hipóteses e decisões na medida do possível.
A entrega deverá ser disponibilizada no Github do candidato com a visibilidade pública e colocar esse readme como referência.



### Resolução

A linguagem que eu utilizei foi o Javascript por ter mais familiaridade com essa linguagem.

- Como primeiro passo eu fiz uma requisição com fetch para pegar os dados do arquivo JSON, simulando uma "busca em uma api".

- Depois te ter os dados, foi necessário formatar de forma correta os itens do JSON e para fazer isso eu utilizei o Método split().

- Já com os itens formatados eu separei qual deles eram então um anagrama.

- Posteriormente, utilizando um for, adicionei eles em uma array utilizando o método push().

- E no final imprimi na tela todos os itens que eram um anagrama.
