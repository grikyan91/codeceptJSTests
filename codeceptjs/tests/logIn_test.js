const assert = require ('assert');

Feature('logIn');

Before (({I}) => {
    I.amOnPage('/');
});

Scenario('Username throw to outlook', async ({ startPage, inboxPage }) => {
    await startPage.logIn('testName');
    const name = await inboxPage.getHiName();
    assert.deepStrictEqual(name, 'Hi testName', 'Имя не соответствует введенному при входе');
});
