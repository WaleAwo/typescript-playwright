import {type Locator, type Page} from '@playwright/test';

export class OrangeHRMLoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly dashboardHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', {name: 'Login'})
        this.dashboardHeader = page.getByRole('heading', {name: 'Dashboard'})
    }

    async setUsernameField(username: string) {
        await this.usernameField.fill(username);
    }

    async setPasswordField(password: string) {
        await this.passwordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getDashboardHeaderText(): Promise<string> {
        return await this.dashboardHeader.innerText();
    }
}