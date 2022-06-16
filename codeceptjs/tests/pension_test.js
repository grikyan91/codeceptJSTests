const assert = require ('assert');
const internetPage = require('../pages/bankPage');

Feature('Open pension');

Before (({I}) => {
    I.amOnPage('/');
});

Scenario('See error about income', async ({ startPage, bankPage }) => {
    await startPage.logIn('test');
    const error = await bankPage.openPension();
    assert.deepStrictEqual(error, 'You must have an income to open a pension', 'Не отобразилось сообщение об ошибке доходов');
});
