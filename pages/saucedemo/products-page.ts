import {type Locator, type Page} from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly productsHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsHeader = page.getByText('Products');
    }

    async getProductsText(): Promise<string> {
        return await this.productsHeader.innerText();
    }
}