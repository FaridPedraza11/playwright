import { Locator, Page, expect } from '@playwright/test';


export class LoginPage{

    private readonly username: Locator
    private readonly password: Locator
    private readonly login : Locator
    private readonly page : Page

    constructor(page: Page){
        this.page = page
        this.username = page.getByPlaceholder('Username')
        this.password = page.getByRole('textbox', {name:'Password'})
        this.login = page.locator('input[name = login-button]')
    }

    async fillUsername(user:string){
        await this.username.fill(user)
    }

    async fillpassword(password:string){
        await this.password.fill(password)
    }

    async clickLogin(){
        await this.login.click()
    }

    async ingreso( user:string, password:string){
        await this.fillUsername(user)
        await this.fillpassword(password)
        await this.clickLogin()
        await expect(this.page.locator('.header_secondary_container')).toBeVisible()
    }


}