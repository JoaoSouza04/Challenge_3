# **Challenge_3**

3° Desafio do estágio da Compass UOL na trilha de Node.js!

**Linguagem Usada:** Node.js com o framework Nest.js

# **Passos para a utilização da API:**

Primeiramente, utlizando o terminal você deverá utilizar alguns comandos, o primeiro deles é: `https://github.com/JoaoSouza04/Challenge_3.git` para clonar este repositório em sua máquina! Após isso, se direcione para esse repositório utilizando o comando `cd caminhoParaRepositório` e substitua o campo "caminhoParaRepositório" pelo caminho até a pasta da API. Quando ja estiver na pasta do repositório, Também será necessário rodar o seguinte comando: `npm install`.

**Comandos para executar a API:** Nesta API, você poderá utilizar o comando `npm run start` para rodar o arquivo principal.

# **Regras para o bom funcionamento da API:**

## **Events Routes:**

_POST_

createEvent: Nesta rota, o padrão esperado do usuário é que seja inserido um texto de descrição e a data do evento.

**IMPORTANTE:**
A data deve ser passada com um formato específico. o formato deve ser 'yyyy-MM-ddTHH:mm:ss' sendo yyyyy o ano, MM o mês, dd o dia, T um separador para o início da inserção das horas, HH as horas, mm minutos, ss segundos e por fim o Z para sinalizar o UTC, este caractere é obrigatório!. Vale ressaltar que é possível inserir apenas a data ou somente a data com as horas e etc. Ex: 'yyyy-MM-ddZ' ou 'yyyy-MM-ddTHHZ'.

**URL e Exemplo de parâmetros para request de criação de eventos:**

`localhost:3000/api/v1/events`

```
{
    "description": "descrição aqui",
    "dateTime": "2023-02-08T12:30Z"
}
```

_GET_

getAll: Nesta rota, o retorno esperado são todos os eventos no banco de dados.

**URL e parâmetros para a query:**

`localhost:3000/api/v1/events`

_GET_

getOne: Aqui o resultado retornado será o evento correspondente ao id passado na URL. Se caso nenhum id for passado ou se o id provido for inválido, o usuário receberá um erro.

**URL e parâmetros para a inserção do id:**

`localhost:3000/api/v1/events/idDoEventoAqui`
O id deve ser passado no campo após a '/'.

_PUT_

updateEvent: Para esta rota, é esperado os parâmetros 'description' e 'dateTime' para que seja realizada uma alteração dos campos e uma atualização no Banco de Dados. Como nas outras rotas, se caso não for disponibilizado os campos, o usuário receberá erros. O campo dateTime deve respeitar o formato apresentado na explicação da rota 'createEvent'!

**URL e exemplo de campos para a rota PUT:**

`localhost:3000/api/v1/events/idDoEventoAqui`
O id deve ser passado no campo após a '/'.

```
{
    "description": "descrição aqui",
    "dateTime": "2023-02-10T12:30Z"
}
```

_DELETE_

deleteEvent: Por último, nesta rota deve ser passado um id como parâmetro para que o respectivo evento seja apagado do Banco de Dados, recebendo então uma resposta com os dados do evento apagado!

**URL para a rota DELETE:**

`localhost:3000/api/v1/events/idDoEventoAqui`
O id deve ser passado no campo após a '/'.

## **User Routes:**

_POST_

signUp: Nesta rota, deve ser passados os parâmetros: texto 'firstName' para a inserção de um texto com o nome, texto 'lastName' para a inserção de um sobrenome, um campo para 'birthDate' que recebe a sua data de nascimento, sem a necessidade de inserir as horas, porém **(respeitando as regras e formatações citadas na rota createEvent das Event Routes)**. Logo em seguida, deve ser passado um campo de texto 'city' para passar a cidade, outro campo de texto 'country' para a inserção do país, um texto 'email' para a inserção de um email, que deve ser válido, e os campos de 'password' e 'passwordConfirm' para a inserção de uma senha!

**URL e parâmetros para a inserção dos campos:**

`localhost:3000/api/v1/users`

```
{
    "firstName": "primeiroNome",
    "lastName": "sobrenome",
    "birthDate": "2000-01-03Z",
    "city": "São Paulo",
    "country": "Brasil",
    "email": "email@domínio.extensão",
    "password": "12345678",
    "passwordConfirm": "12345678"
}
```

_POST_

signIn: Aqui deverá ser passado o email e a senha do usuário, para que seja retornado os dados do mesmo.

**URL e parâmetros para o acesso aos dados do respectivo usuário:**

`localhost:3000/api/v1/users/signIn`

```
{
    "email": "aaaa@gmail.com",
    "password": "a12345678"
}
```

_PUT_

updateUser: Nesta rota, é esperado a maioria dos parâmetros que também são passados no momento da criação, são eles: 'firstName', 'lastName', 'birthDate', 'city', 'country'. **Todos os campos devem respeitar as mesmas regras encontradas na rota de 'signUp'**, para que não ocorra erros no sistema!

**URL e parâmetros de campos para a rota PUT:**

`localhost:3000/api/v1/users/idDoUsuárioAqui`
O id deve ser passado no campo após a '/'.

```
{
  "firstName": "primeiroNome",
  "lastName": "segundoNome",
  "city": "cidade",
  "country": "país"
}
```
