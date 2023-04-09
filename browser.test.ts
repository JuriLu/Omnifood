import { test } from '@playwright/test'

test('Omnifood Safari Test', async ({ page }) => {
    // point this to wherever you want
    await page.goto('http://127.0.0.1:8080/')

    // keep browser open
    await page.pause()
})
