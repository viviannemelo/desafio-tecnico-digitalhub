const { beforeEach } = require("mocha");

describe('Página de Login', () => {
    describe('Caso de sucesso', () => {
        beforeEach(() => {
            cy.visit('/login');
        })

        it('Deve fazer login com e-mail válido e senha válida', () => {
            cy.get('input#login').type('teste@teste.com');

            cy.get('input#password')
                .type('123456')
                .should('have.attr', 'type', 'password');

            cy.get('button[type="submit"]').contains('Entrar').click();
        });
        it('Deve fazer login com CPF válido e senha válida', () => {
            cy.get('input#login')
                .type('59862478614');

            cy.get('input#password')
                .type('123456')
                .should('have.attr', 'type', 'password');

            cy.get('button[type="submit"]').contains('Entrar').click();
        });
        it('Deve fazer login com CNPJ válido e senha válida', () => {
            cy.get('input#login').type('12345678000190');

            cy.get('input#password')
                .type('123456')
                .should('have.attr', 'type', 'password');

            cy.get('button[type="submit"]').contains('Entrar').click();
        });
        it('Deve fazer login com CPF/CNPJ ativo', () => {
            const cpfAtivo = '59862478614';

            cy.get('input#login').type(cpfAtivo);

            cy.get('input#login').type('Ativo');

            cy.get('button[type="submit"]').contains('Entrar').click();
        });
        it('Deve exibir senha ao clicar no ícone', () => {
            cy.get('input#password').should('have.attr', 'type', 'password');
            cy.get('input#password_check').click();
            cy.get('input#password').should('have.attr', 'type', 'text');
        });
        it('Deve ocultar senha ao clicar no ícone', () => {
            cy.get('input#password').should('have.attr', 'type', 'text');
            cy.get('input#password_check').click();
            cy.get('input#password').should('have.attr', 'type', 'password');
        });
    });

    describe('Caso de falha', () => {
        it('Login com e-mail inválido deve mostrar mensagem de erro', () => {
            cy.get('input#login')
                .type('teste@teste,com');

            cy.contains('E-mail ou CPF/CNPJ inválido').should('be.visible');

            cy.get('button[type="submit"]').contains('Entrar').should('be.disabled');
        });
        it('Login com CPF/CNPJ inválido deve mostrar mensagem de erro', () => {
            const cpfInvalido = '12345678900';
            cy.get('input#login')
                .type(cpfInvalido);

            cy.contains('E-mail ou CPF/CNPJ inválido').should('be.visible');

            cy.get('button[type="submit"]').contains('Entrar').should('be.disabled');
        });
        it('Login com CPF/CNPJ desativado deve mostrar mensagem de erro', () => {
            const cpfAtivo = '59862478614';
            cy.get('input#login')
            .type(!cpfAtivo);

            cy.contains('Insira E-mail ou CPF/CNPJ válido').should('be.visible');

            cy.get('button[type="submit"]').contains('Entrar').should('be.disabled');
        });
        it('Login sem E-mail ou CPF/CNPJ deve mostrar mensagem de erro', () => {
            cy.get('input#login')
                .type('');

            cy.contains('Insira E-mail ou CPF/CNPJ válido').should('be.visible');

            cy.get('button[type="submit"]').contains('Entrar').should('be.disabled');
        });
        it('Login sem senha deve mostrar mensagem de erro', () => {
            cy.get('input#password')
                .type('');

            cy.contains('Insira sua senha').should('be.visible');

            cy.get('button[type="submit"]').contains('Entrar').should('be.disabled');
        });
    });
});