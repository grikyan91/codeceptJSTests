const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://simulator.money/play',
      show: false,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    startPage: './pages/startPage.js',
    inboxPage: './pages/inboxPage.js',
    savePage: './pages/savePage.js',
    mainPage: './pages/mainPage.js',
    bankPage: './pages/bankPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'
}