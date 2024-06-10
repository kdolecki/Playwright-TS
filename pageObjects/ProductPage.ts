import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  async addToCart() {
    await this.page.click('button.add-to-cart');
  }
}
