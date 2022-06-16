const { I } = inject();

module.exports = {
  fields: {
    hiName: '#outlook-window > div.window-body > div > div > article.mail-detail.w-100 > div > div.mail-body.p-2.position-relative > p:nth-child(1)',
  },

  async getHiName () {
    const hiText = I.grabTextFrom(this.fields.hiName);
    return hiText;
  }
}
