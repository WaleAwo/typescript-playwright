import {type Locator, type Page} from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = page.getByRole('heading', {name: 'Dashboard'})
    }

    async getDashboardHeaderText(): Promise<string> {
        return await this.dashboardHeader.innerText();
    }
}