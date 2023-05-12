# Desafio técnico Analista de QA | Digital Hub

Este desafio foi desenvolvido em JavaScript utilizando Cypress


# Descrição

O teste está dividido em dois blocos, "Caso de sucesso" e "Caso de falha", onde cada um testa uma série de condições que um usuário pode encontrar ao fazer login.

Na seção "Caso de sucesso", há testes para login com e-mail válido e senha válida, CPF válido e senha válida, CNPJ válido e senha válida, CPF/CNPJ ativo, e exibição/ocultação da senha ao clicar em um ícone.

Na seção "Caso de falha", há testes para login com e-mail inválido, CPF/CNPJ inválido, CPF/CNPJ desativado, login sem e-mail ou CPF/CNPJ, e login sem senha.

Cada teste usa comandos Cypress para interagir com a página e verificar se os resultados estão corretos, como verificar se um elemento está visível, se um botão está desabilitado ou se a senha foi exibida corretamente.

<details>
    <summary>Mapeamento</summary>
    Acesse o arquivo em:

```tree
.
├─ ...
├─ cypress
├─ tests
    └─ mapeamento_login
         └─ mapeamento_ct.pdf
         └─ mapeamento_ct.png
```
Ou acesse o link: [Google Sheets](https://docs.google.com/spreadsheets/d/1hANOg8BeH0VWhEH4JnMR-9auPEL03BUHQR90UBneHXQ/edit#gid=0)
</details>

# Pré-requisitos
- [Node.js](https://nodejs.org/en/)
- [Editor de texto](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)


# Execução
1. Clone o repositório utilizando:
```sh
git clone  <>
```
2. Instalar dependências utilizando o comando:
```sh
npm install
```
3. Acessar arquivo
```tree
.
├─ ...
├─ cypress
   └─ integration
       └─ login.spec.js

```
4. Executar comando para rodar o teste
```sh
npm test
```
5. Execute o comando para abrir o Test Runner e executar em modo interativo
```sh
npm run cy:open
```

