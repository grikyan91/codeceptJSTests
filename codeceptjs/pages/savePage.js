const { I } = inject();

module.exports = {
  icon: {
    saveIcon: 'body > div.desktop-icons.d-flex.flex-column.flex-wrap > div:nth-child(6)',
  },
  fields: {
    email: '#register-window > div.window-body > div > form > div:nth-child(1) > div > input',
    password: '#register-window > div.window-body > div > form > div:nth-child(2) > div > input',
    confirm: '#register-window > div.window-body > div > form > div:nth-child(3) > div > input',
  },
  button: {
    register: '#register-window > div.window-body > div > form > div.d-flex.justify-content-end.align-items-center > button',
    start: '#save-window > div.window-body > div > button',
    close: '#outlook-window > div.title-bar > div.title-bar-controls > button',
  },
  text: {
    gameDate: '#save-window > div.window-body > div > div > div:nth-child(1) > div > div:nth-child(1)',
    messange: '#restarting-game > div:nth-child(2)',
  },

  async createAccount (email, password, confirm) {
    I.waitForElement(this.icon.saveIcon);
    I.click(this.button.close);
    I.click(this.icon.saveIcon);
    I.click(this.fields.email);
    I.fillField(this.fields.email, email);
    I.click(this.fields.password);
    I.fillField(this.fields.password, password);
    I.click(this.fields.confirm);
    I.fillField(this.fields.confirm, confirm);
    I.click(this.button.register);
  },

  async loadGame () {
    I.waitForElement(this.icon.saveIcon);
    I.click(this.icon.saveIcon);
    const numOfElements = await I.grabNumberOfVisibleElements(this.text.gameDate);
    return numOfElements;
  }

}
