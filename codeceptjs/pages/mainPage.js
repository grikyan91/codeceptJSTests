const { I } = inject();

module.exports = {
  icon: {
    off: 'body > a > div',
    paperClip: 'body > img',
  },
  button: {
    close: '#outlook-window > div.title-bar > div.title-bar-controls > button',
  },
  form: {
      title: '#login-window > div.title-bar > div.title-bar-text',
  },

  async getIcon () {
    I.click(this.button.close);
    I.waitForElement(this.icon.paperClip);
    const paperClip = await I.grabAttributeFrom(this.icon.paperClip, 'src');
    return paperClip;
  },
  async logOff () {
    I.waitForElement(this.icon.off);
    I.click(this.icon.off);
    I.click(this.form.title);
    const logOnTitle = I.grabTextFrom(this.form.title);
    return logOnTitle;
  }
}
