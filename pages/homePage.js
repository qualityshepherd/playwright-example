import { BasePage } from './basePage'
import { Search } from './search'

export class HomePage extends BasePage {
  constructor (page) {
    super(page)

    this.url = ''
    this.page = page
    // include shared classes...
    this.search = new Search(page)

    this.posts = page.locator('.post')
    this.postTitle = page.locator('.post-title')
    this.loadMoreBtn = page.locator('#load-more')
  }

  /**
   * wrapper for goto so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  async goto (relativeUrl = '') {
    await this.page.goto(`${this.baseUrl}${this.url}${relativeUrl}`)
  }

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists (postTitle) {
    return await this.postTitle.filter({ hasText: postTitle }).isVisible()
  }

  /**
   * load more pages until we find the post title or run out of posts
   * @param  {string} postTitle
   * @return {bool}
   */
  async findPostByLoadingMore (postTitle) {
    await this.loadMoreBtn.click()
    return await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle)
  }
}
