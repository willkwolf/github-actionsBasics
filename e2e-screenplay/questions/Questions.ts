import { Page } from '@playwright/test';
import { Targets } from '../targets/UIElements';

export class Text {
    static async from(page: Page, selector: string): Promise<string> {
        return await page.textContent(selector) || '';
    }
}

export class Ensure {
    static that(page: Page): ProductsContainerQuestion {
        return new ProductsContainerQuestion(page);
    }
}

export class ProductsContainerQuestion {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async containsText(expectedText: string, selector: string): Promise<boolean> {
        const text = await Text.from(this.page, selector);
        return text.includes(expectedText);
    }
}