import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Actor } from '../../../e2e-screenplay/actors/Actor';
import { OpenApp, Login } from '../../../e2e-screenplay/tasks/Tasks';
import { Ensure } from '../../../e2e-screenplay/questions/Questions';
import { Page, expect, chromium } from '@playwright/test';
import { Targets } from '../../../e2e-screenplay/targets/UIElements';

let page: Page;
let actor: Actor;
let browser: any;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
});

Given('que Michael está en la página de inicio de sesión de Sauce Demo', async function () {
    actor = Actor.named('Michael', page);
    await actor.attemptsTo(
        OpenApp.at('https://www.saucedemo.com/v1/index.html')
    );
});

When('inicia sesión con el usuario {string} y la contraseña {string}', async function (username: string, password: string) {
    await actor.attemptsTo(
        Login.withCredentials(username, password)
    );
});

Then('debería ver la página de Productos', async function () {
    const isProductsVisible = Ensure.that(page).containsText('Products', Targets.PRODUCTS_PAGE.PRODUCTS_CONTAINER);
    expect(isProductsVisible).toBeTruthy();
});