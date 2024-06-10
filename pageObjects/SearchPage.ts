import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  async applyFilter(filter: string) {
    await this.page.click(`text=${filter}`);
  }

  async getResults() {
    return this.page.$$eval('.product', products => products.map(product => product.textContent));
  }
}
