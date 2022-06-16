const { I } = inject();

module.exports = {
  icon: {
      bankAccount: 'body > div.desktop-icons.d-flex.flex-column.flex-wrap > div:nth-child(3)',
  },
  tabs: {
    pension: '#bank-account-window > div.window-body > menu > button:nth-child(2)',
  },
  button: {
    close: '#outlook-window > div.title-bar > div.title-bar-controls > button',
    browse: '#pensions > div:nth-child(2) > button',
    open: '#internet-window > div.window-body > div:nth-child(7) > div > div > div.d-flex.align-items-center.mb-3 > div:nth-child(4) > button',
  },
  forms: {
      internet: '#internet-window',
  },
  messages: { 
      error: '#internet-window > div.window-body > div:nth-child(7) > div > div > div.d-flex.align-items-center.mb-3 > div:nth-child(4) > div',
  },

  async openPension () {
    I.waitForElement(this.icon.bankAccount);
    I.click(this.button.close);
    I.click(this.icon.bankAccount);
    I.click(this.tabs.pension);
    I.click(this.button.browse);
    I.waitForElement(this.forms.internet);
    I.click(this.button.open);
    I.waitForVisible(this.messages.error);
    const errorText = I.grabTextFrom(this.messages.error);
    return errorText;
  }
}
