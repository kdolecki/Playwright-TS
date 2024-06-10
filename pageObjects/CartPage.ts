import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  async getCartItems() {
    return this.page.$$eval('.cart-item', items => items.map(item => item.textContent));
  }
}
