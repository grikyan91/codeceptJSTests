const assert = require ('assert');

Feature('logOff');

Before (({I}) => {
    I.amOnPage('/');
});

Scenario('User log off', async ({ startPage, mainPage }) => {
    await startPage.logIn('testName');
    const title = await mainPage.logOff();
    assert.deepStrictEqual(title, 'Log on to your computer', 'Пользователь не разлогинился');
});
