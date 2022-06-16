const assert = require ('assert');

Feature('Load account');

Before (({I}) => {
    I.amOnPage('/');
});

Scenario('LogIn with account', async ({ startPage, mainPage}) => {
    await startPage.loadGame('test@mail.ru', 'test123');
    const img = await mainPage.getIcon();
    assert.equal(img, 'https://simulator.money/img/clippy.png', 'Не зашли в существующий аккаунт');
});
