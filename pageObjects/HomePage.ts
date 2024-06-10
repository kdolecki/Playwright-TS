import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  async search(product: string) {
    await this.page.fill('input[name="search"]', product);
    await this.page.click('button[type="submit"]');
  }
}
