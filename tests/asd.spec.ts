import { test, expect } from '@playwright/test';

test('flujo compra', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html')
  //await page.locator('input[Placeholde = ]')
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce')
  await page.locator('input[name = login-button]').click()
 //#inventory_container .inventory_item -- numeral para buscar por id y espacio y puinto para elegir la class
  const itemsContainer = await page.locator('#inventory_container .inventory_item').all()

  const randomIndex = Math.floor(Math.random()*itemsContainer.length)
  const randomItem = itemsContainer[randomIndex]

  const name = await randomItem.locator('.inventory_item_name').innerText()
  const desc = await randomItem.locator('.inventory_item_desc').innerText()
  const precio = await randomItem.locator('.inventory_item_price').innerText()

  console.log(`Precio : ${precio} nombre : ${name} descripcion : ${desc}` )

  await randomItem.getByRole('button', { name:'add to cart'}).click()
  await page.locator('#shopping_cart_container .shopping_cart_link').click()

  await expect(page.getByRole('button', {name:'Checkout'})).toBeVisible()// no aseguramos que el localizador y por consiguiente la pagina esta cargada para que tome bien los valores

  const namecar = await page.locator('.inventory_item_name').innerText()
  const desccar = await page.locator('.inventory_item_desc').innerText()
  const precioccar = await page.locator('.inventory_item_price').innerText()

  console.log(`Preciocar : ${precioccar} namecar : ${namecar} desccar : ${desccar}` )

  expect(namecar).toEqual(name)
  expect(desccar).toEqual(desc)
  expect(precioccar).toEqual(precio)

  await page.getByRole('button', {name:'Checkout'}).click()

  await page.getByRole('textbox' , {name: 'First Name'}).fill('goku')
  await page.getByRole('textbox' , {name: 'Last Name'}).fill('goku')
  await page.getByPlaceholder('Zip/Postal Code').fill('33')

  await page.getByRole('button' , {name: 'Continue'}).click()
  await page.getByRole('button' , {name: 'Finish'}).click()
  await expect (page.getByRole('heading' , {name: 'Thank you for your order!'})).toBeVisible()
  

   await page.pause()
});