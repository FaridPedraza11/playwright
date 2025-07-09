import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test 3', async ({ page }) => {
  
  await page.goto('https://www.mercadolibre.com.co')
  await page.locator('input[id = cb1-edit]').fill('creatina')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[contains(@class,\'ui-search-layout\')]')).toBeVisible()
  await page.pause()
});

test('test 4', async ({ page }) => {
  
  await page.goto('https://www.mercadolibre.com.co')
  await page.locator('//input[@class = nav-search-input]')
  await page.pause

  await  page.locator('input[class =nav-search-input]')
  await page.pause()

});

test('cap 7', async ({ page })  => {

  await page.goto('https://www.mercadolibre.com.co')
  await page.getByRole('link',{name : 'Ingresa', exact:true}).click()
  await page.pause()
    
})

