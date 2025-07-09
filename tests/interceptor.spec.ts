import { test, expect } from '@playwright/test';

test('flujo compra 1 ', async ({ page }) => {

  await page.on("request", req =>{
    console.log(req.url())
  })
  await page.route("https://demoqa.com/BookStore/v1/Books"  //intercepte esta peticion url
    ,(route)=> { // envie esta respuesta como rta a la peticion anterior
        route.fulfill({
            status:304,
            headers:{
               'Content-type' : 'application/json'
            },
            body:`
            {
                 "books": [{
                                
                        "isbn": "9781449325862",
                        "title": "Git Pocket Guide",
                        "subTitle": "A Working Introduction",
                        "author": "Richard E. Silverman",
                        "publish_date": "2020-06-04T08:48:39.000Z",
                        "publisher": "O'Reilly Media",
                        "pages": 234,
                        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                        "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                    }]
            }`
            
            
        })
    })
  
  await page.goto('https://demoqa.com/books')

   await page.pause()

   await page.screenshot({path:'in.png',fullPage:true})
});