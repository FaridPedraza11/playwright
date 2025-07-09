import{test,expect} from '@playwright/test'

test('tabla', async ({page}) => {
    //await page.goto(process.env.URL)
    await page.goto('https://cosmocode.io/automation-practice-webtable/')
    
    const tablecontainer = await page.locator('xpath=//table[@id="countries"]')

    const rows = await tablecontainer.locator('xpath=.//tr').all()

    // console.log(rows.length)


    const countries: Country[] = [] // se crea una lista de paises en donde cada elemento tiene la esctrura de la interface y se inicializa vacio

    for(let row of rows ){
        let country: Country={ // se crea una variable dentro del for de tipo interface qeu va tomando lso valores de las lista de rows
            name: await row.locator('xpath=.//td[2]').innerText(),
            capital: await row.locator('xpath=.//td[3]').innerText(),
            currency: await row.locator('xpath=.//td[4]').innerText(),
            language: await row.locator('xpath=.//td[5]').innerText()
        }
        countries.push(country)
    }
    const vi = countries.filter(i =>i.name ==='Vietnam')
    console.log(vi)
    // for(let countri of countries){
    //     console.log(countri)
    // }



})

interface Country{
    name:string
    capital:string
    currency:string
    language:string
}