describe('Тестирование магазина покемонов', function () {
    it('автотест на покупку нового фото для своего тренера', function () {
         cy.visit('https://pokemonbattle.me/login'); //вход в сайт
         cy.get(':nth-child(1) > .auth__input').type('ahtyamovazamath@yandex.ru'); //ввод логин
         cy.get('#password').type('CS_haikom93'); //вводим пороль
         cy.get('.auth__button').click(); //клик войти
         cy.get('.header__btns > [href="/shop"]').click(); //клик по магазину
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(2).click(); //выбрать автвра отсчет от 0 и клик
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //ввод номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); //ввод срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ввод код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Azamat Ahtyamov'); //ввод имя
        cy.get('.pay-btn').click(); //клик оплатить
        cy.get('#cardnumber').type('56456'); //ввод код пуш
        cy.get('.payment__submit-button').click(); // клик оплатить
        cy.get('.payment__adv').click(); //клик вернуться в магазин
     })
 })