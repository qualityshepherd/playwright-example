import { BasePage } from './basePage'

export class Search extends BasePage {
  constructor (page) {
    super(page)
    this.page = page

    this.results = page.locator('.post')
    this.noResultsMsg = page.locator('#no-results')
    this.box = page.locator('#search')
  }

  /**
   * search for the given text
   * @param  {string} text
   */
  async for (text) {
    await this.box.fill(text)
    await this.hitEnter()
  }
}
