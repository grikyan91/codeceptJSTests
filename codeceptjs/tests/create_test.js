const assert = require ('assert');
const { faker } = require('@faker-js/faker');

Feature('New account');

Before (({I}) => {
    I.amOnPage('/');
});

Scenario('Create new account with game', async ({ startPage, savePage }) => {
    await startPage.logIn('test123');
    const mail = faker.internet.email();
    await savePage.createAccount(mail, 'test123', 'test123');
    const num = await savePage.loadGame();
    assert.equal(num, '1', 'Не отобразилась первая игра в созданном аккаунте');
});
