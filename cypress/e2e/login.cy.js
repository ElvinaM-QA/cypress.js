
describe('Автотесты на форму логина', function () {
    it('1 Верный логин,верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //вход в сайт
         cy.get('#mail').type('german@dolnikov.ru'); //ввод логина
         cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
         cy.get('#pass').type('iLoveqastudio1'); //вводим пароль
         cy.get('#loginButton').click(); //клик войти
         cy.get('#messageHeader').should('be.visible'); //надпись видна
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совпадение текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
     })
     it('2 Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввод логина
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#forgotEmailButton').click(); //клик забыли пороль
        cy.get('#forgotForm > .header').should('be.visible'); //надпись видна
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //совпадение текста
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //крестик виден
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести логин
        cy.get('#restoreEmailButton').click(); //клик отправить код
        cy.get('#messageHeader').should('be.visible'); //надпись видна
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден 
    })
     it('3 Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввод логина
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio5'); //вводим пороль
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видна
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
    it('4 Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('german@dolnikov23.ru'); //ввод логина
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio1'); //ввод пароля
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видна
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
    it('5 Неверный логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('germandolnikov23.ru'); //ввод логина
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio1'); //ввод пороля
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видна
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
    it('6 Неверный логин c заглавными и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //вход в сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввод логина
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблина
        cy.get('#pass').type('iLoveqastudio1'); //ввод пароля
        cy.get('#loginButton').click(); //клик войти
        cy.get('#messageHeader').should('be.visible'); //надпись видна
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
 })