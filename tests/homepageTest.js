import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
let homePage

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.goto()
  })

  test('should display 7 posts per page', async () => {
    await expect(homePage.posts).toHaveCount(7)
  })

  test('should load more posts', async () => {
    const postTitle = 'Protractor - How To Page Object'
    await homePage.findPostByLoadingMore(postTitle)

    await expect(homePage.postTitleExists(postTitle)).toBeTruthy()
  })
})
