export class BasePage {
  constructor (page) {
    this.page = page
    this.baseUrl = 'https://qualityshepherd.com/'
  }

  /**
   * wrapper for navigateTo so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  async goto (relativeUrl = '') {
    await this.page.goto(`${this.baseUrl}${this.url}${relativeUrl}`)
  }

  async hitEnter () {
    await this.page.keyboard.press('Enter')
  }
}
