# 🔥Teste Front-End Permaneo

> O intuito projeto é completar um desafio técnico proposto pela equipe de técnica da permaneo

## Do que se trata

É um projeto simples, desenvolvido com NextJS, SCSS e Redux. A ideia é disponibilizar página com uma lista de vários cursos onde o usuário pode navegar e acessá-los. Dependendo dos seus dados de usuário, ele pode entrar numa página de um curso para comprá-lo ou para assistir uma aula.

## Como funciona

O projeto é inteiramente mocado com dados estáticos. O único diferencial que criei foi proporcionar uma experiência de navegação em uma página real através da simulação de requisições com **Promises**. A ideia é simular chamadas de API dentro do projeto, devolvendo uma promise com um tempo de resolução específico para retornar os dados internos mocados.

#### Listagem de cursos

Você pode navegar pela listagem e escolher um curso específico. As opções do card depende das informações do usuário.

#### Compra de cursos

Se o usuário não possuir o curso comprado dentro do seu array de compras ele pode acessar a página de compra do produto. Lá, ele podera assistir a aula. Quando o usuário sai da página, o progresso do vídeo é armazenado e quando ele voltar naquela página novamente e der play, o vídeo vai começar do lugar de onde ele parou.

#### Pagina de favoritos

Se o usuário usou a função de favoritar o curso dentro da página de compra, o produto ficará disponível na página de favoritos

**Obs.:** _Se o usuário tentar forçar o id de um curso que ele nâo comprou para acessar a página do playes, ele será redirecionado para a página de compra do produto._

#### Player do curso

Se o usuário possuir o curso comprado dentro do seu array de compras ele pode acessar a página de player, onde ele poderá assistir um vídeo. Lá, ele podera comprá-lo e ser automaticamente redirecionado para a página do player.

## Como foi construído

Para isso eu usei o conjunto de ferramentas do Next.js para realizar toda a parte de roteamento, exibição de templates e estilização em conjunto com SCSS. Usei o Redux para tratar de toda a parte lógica de tratamento e manipulção de estado, tentando separar ao máximo toda essa lógica dos templates.

## Rodando a aplicação

Apenas baixe o projeto através do github e primeiramente instale as dependências:

```
npm i
```

Após a instalação de todas as dependências, usar o seguinte comando para rodar a aplicação:

```
npm run dev
```

Pronto, a aplicação deve rodar corretamente agora.

## Testes

Eu criei teste em componentes que julguei serem necessários. Após instalar as depenências com o comando acima, você deve rodar:

```
npm run test
```

Esse comando irá realizar a checagem de todos os testes. Agora, se você quer manter estes testes rodando independentemente de alterações e edições, deverá rodar:

```
npm run test:watch
```

## Algumas considerações

Por conta do prazo limite acabei não conseguindo implementar a persistência de dados na página. O que não afeta o correto funcionamento do projeto, mas todas as vezes que você usar o **F5**
ou entrar em uma rota de forma manual, **o estado global da aplicação será resetado**.
