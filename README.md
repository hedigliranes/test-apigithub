# Resumo

Este projeto tem como objetivo a construção de uma aplicação React que busca o perfil de desenvolvedores na API pública do GitHub e exibe seus dados em uma página de perfil. As histórias de usuário incluem:

- Na página inicial, os usuários devem poder pesquisar por um nome de usuário do GitHub e ter os dados do usuário exibidos corretamente na página de perfil.

- Os repositórios na página de perfil devem ser ordenados de acordo com o número de estrelas, do maior para o menor.

- Os nomes dos repositórios devem ser links que redirecionam para os respectivos repositórios no GitHub.

- Se o usuário pesquisado tiver um site ou uma conta no Twitter em seu perfil, deve haver botões que, ao serem clicados, abram o site ou a conta no Twitter, respectivamente.

- O botão de voltar deve levar o usuário de volta à página inicial, permitindo que outro usuário do GitHub seja pesquisado.

Referências úteis:

- API de busca de usuários do GitHub: [https://api.github.com/users/username](https://api.github.com/users/username)

- API de busca de repositórios do usuário pesquisado: [https://api.github.com/users/username/repos](https://api.github.com/users/username/repos)

- Documentação oficial do GitHub: [https://docs.github.com/en/rest](https://docs.github.com/en/rest)

## Requisitos

Foi escolhido o Bootstrap para a estilização da aplicação por ser uma das bibliotecas mais famosas do mercado, de modo que a maioria das pessoas terá facilidade em entender o que foi feito usando essa biblioteca.

As seguintes versões foram usadas:

- Node.js: v16.18.0
- React.js: v18.2.0
- Bootstrap: v5.0

## Configuração do Ambiente

Para executar este projeto, siga as etapas abaixo:

1. Clone este repositório para sua máquina local.

```bash
git clone https://github.com/hedigliranes/test-apigithub.git
```

2. Navegue até o diretório do projeto.

```bash
cd test-apigithub
```

3. Instale as dependências do Node.js.

```bash
npm install
```

3.1. Caso a sua versão do Node seja diferente use:

```bash
nvm install v16.18.0
```

3.2. Depois altere a versão em uso com:

```bash
nvm use v16.18.0
```

4. Inicie o servidor de desenvolvimento.

```bash
npm start
```

Isso iniciará o aplicativo em modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizá-lo.

5. Build a aplicação para deploy.

```bash
npm run build
```

## Estrutura do Projeto

O projeto segue a estrutura padrão do React.js, com os seguintes diretórios e arquivos principais:

```
test-apigithub/
  public/
    index.html
    favicon.ico
  src/
    pages/
        home/
            Home.css
            Home.js
        profile/
            Profile.css
            Profile.js
        Routes.js
    index.css
    index.js
    ...
  package.json
  README.md
```

- A pasta `public` contém o arquivo HTML principal e outros recursos estáticos.
- A pasta `src` contém os componentes React.js, estilos e os arquivos principais do aplicativo.
- O arquivo `index.js` é o ponto de entrada do aplicativo React.js.

## Recursos Adicionais

- Para criar componentes React.js, consulte a documentação oficial do React: [React.js Documentation](https://reactjs.org/docs/getting-started.html).
- Para estilizar o aplicativo usando Bootstrap, consulte a documentação oficial do Bootstrap: [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

## Contribuição

Se você quiser contribuir para este projeto, fique à vontade para fazer um fork e enviar suas solicitações pull. Será um prazer contar com a sua colaboração!