const { beforeEach } = require("mocha");

describe('Página de Login', () => {
    describe('Caso de sucesso', () => {
        beforeEach(() => {
            cy.visit('http://site.com/pagina-de-login')
        })

        it('Login com e-mail válido e senha válida', () => {
            cy.get('input#login')
            .should('be.visible')
            .type('teste@teste.com')

            cy.get('input#password')
            .should('be.visible')
            .type('123456')
        });
        it('Login com CPF/CNPJ e senha válidos', () => {
            
        });
        it('Login com CPF/CNPJ ativado', () => {
            
        });
        it('Exibir senha ao clicar no ícone', () => {
            
        });
        it('Ocultar senha ao clicar no ícone', () => {
            
        });
    });

    describe('Caso de falha', () => {
        it('Login com e-mail inválido', () => {
            
        });
        it('Login com CPF/CNPJ inválido', () => {
            
        });
        it('Login com CPF/CNPJ desativado', () => {
            
        });
        it('Login sem E-mail ou CPF/CNPJ', () => {
            
        });
        it('Login sem senha', () => {
            
        });
    });
});