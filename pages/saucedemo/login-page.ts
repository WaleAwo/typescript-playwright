import {type Locator, type Page} from '@playwright/test';
import {ProductsPage} from "./products-page";

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByRole('textbox', {name: 'Username'})
        this.passwordField = page.getByRole('textbox', {name: 'Password'})
        this.loginButton = page.getByRole('button', {name: 'Login'})
        this.errorMessage = page.getByRole('heading', {name: 'Epic sadface'})
    }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async setUsernameField(username: string) {
        await this.usernameField.fill(username);
    }

    async setPasswordField(password: string) {
        await this.passwordField.fill(password);
    }

    async clickLoginButton(): Promise<ProductsPage> {
        await this.loginButton.click();
        return new ProductsPage(this.page)
    }

    async login(username: string, password: string): Promise<ProductsPage> {
        await this.setUsernameField(username);
        await this.setPasswordField(password);
        return await this.clickLoginButton()
    }

    async getErrorMessageText(): Promise<string> {
        return await this.errorMessage.innerText();
    }
}