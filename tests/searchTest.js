import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
let homePage

test.describe('Search', () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.goto()
  })

  test('should return search results', async () => {
    await homePage.search.for('python')
    await expect(homePage.posts).toHaveCount(1)
  })

  test('should display no results message', async () => {
    await homePage.search.for('this search should return no results')
    await expect(homePage.search.noResultsMsg).toBeVisible()
  })
})
