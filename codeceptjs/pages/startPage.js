const { I } = inject();

module.exports = {
  fields: {
      name: '#username',
      email: '#email-login > div > form > div:nth-child(1) > div > input',
      password: '#email-login > div > form > div:nth-child(2) > div > input',
  },
  button: {
    login: '#guest-login > div > form > div.d-flex.justify-content-end.align-items-center > button',
    loadLogIn: '#email-login > div > form > div.d-flex.justify-content-end.align-items-center > button',
  },
  tab: {
    loadTab: '#login-window > div.window-body > menu > button:nth-child(2)',
  },
  form: {
    outlook: '#outlook-window',
  },

  async logIn (username) {
    I.click(this.fields.name);
    I.fillField(this.fields.name, username);
    I.click(this.button.login);
    I.waitForElement(this.form.outlook);
  },

  async loadGame (email, password) {
    I.click(this.tab.loadTab);
    I.click(this.fields.email);
    I.fillField(this.fields.email, email);
    I.click(this.fields.password);
    I.fillField(this.fields.password, password);
    I.click(this.button.loadLogIn);
  }
}
