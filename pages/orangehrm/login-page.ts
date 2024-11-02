import {type Locator, type Page} from '@playwright/test';
import {DashboardPage} from "./dashboard-page";

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', {name: 'Login'})
    }

    async goto() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async setUsernameField(username: string) {
        await this.usernameField.fill(username);
    }

    async setPasswordField(password: string) {
        await this.passwordField.fill(password);
    }

    // transition to another page
    async clickLoginButton(): Promise<DashboardPage> {
        await this.loginButton.click();
        return new DashboardPage(this.page);
    }

    // combines multiple methods + transition to another page
    async login(username: string, password: string): Promise<DashboardPage> {
        await this.setUsernameField(username);
        await this.setPasswordField(password);
        return await this.clickLoginButton()
    }
}