import {expect, test} from '@playwright/test';
import {OrangeHRMLoginPage} from "./pom/orangehrm-login-page";

test.beforeEach(async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test.describe('Login', () => {
    test('should perform basic login', async ({page}) => {

        await page.getByPlaceholder('Username').fill("Admin")
        await page.getByPlaceholder('Password').fill("admin123")
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page).toHaveTitle(/OrangeHRM/);
        await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
    });

    test('should perform basic login using pom', async ({page}) => {
        const orangehrmLoginPage = new OrangeHRMLoginPage(page)

        await orangehrmLoginPage.setUsernameField("Admin")
        await orangehrmLoginPage.setPasswordField("admin123")
        await orangehrmLoginPage.clickLoginButton();

        await expect(page).toHaveTitle(/OrangeHRM/);

        const headerText = await orangehrmLoginPage.getDashboardHeaderText();
        await expect(orangehrmLoginPage.dashboardHeader).toBeVisible()
        expect(headerText).toBe('Dashboard');
    })
})

