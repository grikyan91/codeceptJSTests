/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type startPage = typeof import('./pages/startPage.js');
type inboxPage = typeof import('./pages/inboxPage.js');
type savePage = typeof import('./pages/savePage.js');
type mainPage = typeof import('./pages/mainPage.js');
type MailSlurp = import('@codeceptjs/mailslurp-helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, startPage: startPage, inboxPage: inboxPage, savePage: savePage, mainPage: mainPage }
  interface Methods extends Playwright, MailSlurp {}
  interface I extends ReturnType<steps_file>, WithTranslation<MailSlurp> {}
  namespace Translation {
    interface Actions {}
  }
}
