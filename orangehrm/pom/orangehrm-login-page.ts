import {type Locator, type Page} from '@playwright/test';
import {OrangeHRMDashboardPage} from "./orangehrm-dashboard-page";

export class OrangeHRMLoginPage {
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

    async setUsernameField(username: string) {
        await this.usernameField.fill(username);
    }

    async setPasswordField(password: string) {
        await this.passwordField.fill(password);
    }

    // transition to another page
    async clickLoginButton(): Promise<OrangeHRMDashboardPage> {
        await this.loginButton.click();
        return new OrangeHRMDashboardPage(this.page);
    }

    // combines multiple methods + transition to another page
    async login(username: string, password: string): Promise<OrangeHRMDashboardPage> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        return await this.clickLoginButton()
    }
}